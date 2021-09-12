import React, {useEffect,useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
import {useSelector} from "react-redux";
import './card.css'



function Postings(props){

    const jobCode = props.code
    const {ch_areasi} = useSelector(state => state.area_modules);
    const {ch_areagu} = useSelector(state => state.area_modules);

    const[postings, setPostings] = useState([])

    useEffect(()=>{
        //post 전송을 위해 form data 생성
        let data = new FormData();
        data.append("code",jobCode)
        data.append("si",ch_areasi)
        data.append("gu",ch_areagu)

        axios.post('/postings/', data)
        .then(function (res) {
            setPostings(res.data)
        })
        .catch(function (err) {
            console.log(err);
        });
    },[jobCode])


    return(
        <div className="postings">
            {postings[0]?
                postings.map((posting)=>(
                    <div className="card">
                        {/* <!-- 카드 헤더 -->*/}
                            {/*<div class="card-header" >*/}
                            {/*    <div class = "card-header-is_closed" >*/}
                            {/*        <div class = "card-header-text" > 모집중 </div >*/}
                            {/*        <div class = "card-header-number" > 2 / 5 </div >*/}
                            {/*    </div >*/}
                            {/*</div>*/}
                            {/* <!--  카드 바디 -->*/}
                          <a href={posting.fields.url}>
                            <div className="card-body">
                            {/*// <!--  카드 바디 헤더 -->*/}
                            <div className="card-body-header">
                                <h1>{posting.fields.company}</h1>
                                <p className = "card-body-nickname">
                                    {posting.fields.subtitle}
                                </p>
                            </div>
                            {/*<p className="card-body-description">*/}
                            {/*    hover시 보이나 ?*/}
                            {/*</p>*/}
                            {/*// <!--  카드 바디 본문 -->*/}
                            {/*// <!--  카드 바디 푸터 -->*/}
                            <div className="card-body-footer">
                                <p>
                                <span>{posting.fields.city} {posting.fields.county}</span>
                                <span className="pay_data"> <span className="pay-type">{posting.fields.pay_type}</span>{posting.fields.pay} </span>
                                </p>
                            </div>
                            </div>
                          </a>
                    </div>
                ))
                :<p>최근 공고가 없습니다.</p>
            }
        </div>
    )

}

export default Postings;