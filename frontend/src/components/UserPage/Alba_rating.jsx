import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Job2 from "./Job2";

import "../../css/Job2.css";
import "../../css/Alba_rating.css";

import {useDispatch, useSelector} from "react-redux";
import {changeJob} from "../../store/modules/job_modules";
import {changeScore} from "../../store/modules/job_modules";
import {Input} from "antd";
import Axios from "axios";

function Alba_rating(){

    const dispatch = useDispatch();  //변경사항을 스토어에 반영하기 위해 dispatch 만들어줌

    const {ch_jobfamily} = useSelector(state=>state.job_modules); //스토어에 있는 값 가져옴
    const {ch_job} = useSelector(state=>state.job_modules);
    const {ch_score} = useSelector(state=>state.job_modules);

    const [email, setEmail] = useState('')  //추가
    let token
    useEffect(() => {   //추가
        token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
            Axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
            }).then(res => {
                setEmail(
                    res.data.email
                )
                console.log(res.data)
                console.log("email : " + email)
            });
        }
    }, [])

    const onChangeJob = (ch_jobfamily, ch_job) => dispatch(changeJob(ch_jobfamily, ch_job));

    const onChangeScore = (ch_score) => dispatch(changeScore(ch_score));

    const JOBFAMILY = [
            "외식ㆍ음료", "유통ㆍ판매", "문화ㆍ여가ㆍ생활", "서비스", "사무직", "고객상담ㆍ리서치ㆍ영업", "생산ㆍ건설ㆍ운송", "ITㆍ컴퓨터",
            "교육ㆍ강사", "디자인", "미디어", "운전ㆍ배달", "병원ㆍ간호ㆍ연구",
    ];

    const SCORE = [
        5,4,3,2,1,0,
    ]

    const ratingSubmit = (e) => {   //추가
        e.preventDefault()

        const rating1 = {
            email: email,
            jobfamily : ch_jobfamily,
            job : ch_job,
            score : ch_score
        }
        console.log(rating1);

        let token = localStorage.getItem('token')

        Axios.post("/user/userrating/", rating1,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            })
            .then(response=>{
                console.log(response)
                alert("평가 완료 !")
                onChangeJob("","")
                onChangeScore("")
                window.location.replace('/Alba_rating')

            })
            .catch(function (err){

                console.log("token : ",token)
              //console.clear()
              console.log(err)
        })
  }

    return (
        <div className ="alba_rating-container">

            <div className="alba_subbox">
            <h1>내가 해봤던 알바 평가하기</h1>
            <h2>[직종선택]</h2>
            <h3>선택한 직종 : &nbsp; {ch_jobfamily} => {ch_job} </h3>
            </div>


            <div className="Job-grid-thead">
                {JOBFAMILY.map((i,index) =>
                    (<div id={i} key={i} onClick={()=>{onChangeJob(i,'')}}
                                  className="Job-cell" >
                                <div className="JobImgDiv">
                                    <img className="JobImg" src={require(`../../img/JOBIcon/${i}.png`).default}/></div>
                                <div>{i}</div>
                    </div>))}
            </div>


            <div className="alba_subbox2">

                <table id="job_table">

                <tr colSpan={JOBFAMILY.length}><Job2 job_value={ch_jobfamily} /></tr>

                </table>

            </div>


            <div className="mid_box">
            <h3>점수 매기기</h3>

                <div align="center" id="rating">
                    <table>
                        <fieldset>
                        {SCORE.map(i =>
                                  <label>⭐<input type="radio" className="scoreSelect" name={"score_"} value={i}
                                    onChange={()=>onChangeScore(i)}/> </label>)
                        }
                        </fieldset>

                    </table>
                </div>
            </div>


            <form onSubmit={ratingSubmit}>
                <Input className="ratingBtn" type='submit' size="large" value='평가하기' />
            </form>

        </div>
    );
}
export default Alba_rating;
