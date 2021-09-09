import React, {useEffect,useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
import {useSelector} from "react-redux";


function MbtiPostings(props){

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

        axios.post('http://localhost:8000/postings/', data)
        .then(function (res) {
            setPostings(res.data)
        })
        .catch(function (err) {
            console.log(err);
        });
    },[jobCode])


    return(
        <div>
            <h3>Posting Components</h3>
            {postings[0]?
                postings.map((posting)=>(
                    <a href={posting.fields.url}>
                        <p>{posting.fields.company}<br/>
                            {posting.fields.subtitle}<br/>
                            {posting.fields.pay_type}<br/>
                            {posting.fields.pay}<br/>
                        </p>
                    </a>
                ))
                :<p>최근 공고가 없습니다.</p>
            }
        </div>
    )

}

export default MbtiPostings;