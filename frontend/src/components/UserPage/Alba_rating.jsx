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
    const email = localStorage.getItem('email')
    let token
    useEffect(() => {   //추가
        token = localStorage.getItem('token')
    }, [])

    console.log(email)
    const JOBFAMILY = [
            "외식ㆍ음료", "매장관리ㆍ판매", "서비스", "사무직", "고객상담ㆍ리서치ㆍ영업", "생산ㆍ건설ㆍ노무", "ITㆍ기술",
            "교육ㆍ강사", "디자인", "미디어", "운전ㆍ배달", "병원ㆍ간호ㆍ연구",
    ];
    const SCORE = [
        5,4,3,2,1,
    ]
    const [albaArr, setAlbaArr] = useState(Array(JOBFAMILY.length).fill(false));
    const [albaDetailArr, setAlbaDetailArr] = useState(Array(25).fill(false));
    const [albaScoreArr, setAlbaScoreArr] = useState(Array(SCORE.length).fill(false));
    const onChangeJob = (ch_jobfamily, ch_job, index) => {
        dispatch(changeJob(ch_jobfamily, ch_job));
        setAlbaArr(
            albaArr.map((a, i)=>
                i===index ? true : false)
        )
        setAlbaDetailArr((
            albaDetailArr.map(a=> false)
        ))
        dispatch(changeScore(0));
        setAlbaScoreArr(
            albaScoreArr.map(a=>false)
        )
    }
    const onChangeScore = (ch_score, index) => {
        dispatch(changeScore(ch_score));
        setAlbaScoreArr(
            albaScoreArr.map((a, i)=>
                i>=index ? true : false)
        )
    }
    const ratingSubmit = (e) => {   //추가
        e.preventDefault()
        if(ch_job!=='') {
            let chk = window.confirm(`${ch_jobfamily} | ${ch_job} | ${ch_score}점으로 평가하시겠습니까?`);
            if (chk == true) {
                const rating1 = {
                    email: email,
                    jobfamily: ch_jobfamily,
                    job: ch_job,
                    score: ch_score,
                    mbti: localStorage.getItem('mbti'),
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
                    .then(response => {
                        console.log(response)
                        alert("평가 완료 !")
                        onChangeJob("", "")
                        onChangeScore(0)
                        window.location.replace('/Alba_rating')

                    })
                    .catch(function (err) {
                        console.log("token : ", token)
                        //console.clear()
                        console.log(err)
                    })
            } else {

            }
        }
  }

    return (
        <div className ="alba_rating-container">
            <div className="alba_subbox">
            <h1>내가 해봤던 알바 평가하기</h1>
            </div>

            <div className="Job-grid-thead">
                {JOBFAMILY.map((i,index) =>
                    (<div id={i} key={i} onClick={()=>{onChangeJob(i,'',index)}}
                                  className="Job-cell" >
                                <div className={`JobImgDiv${albaArr[index]? ' selectJob':''}`}>
                                    <img className="JobImg" src={require(`../../img/JOBIcon/${i}.png`).default}/></div>
                                <div>{i}</div>
                    </div>))}
            </div>

            <div className="alba_subbox2">
                {/*<table id="job_table">*/}
                {/*<tr colSpan={JOBFAMILY.length}>*/}
                    <Job2 job_value={ch_jobfamily} albaDetailArr={albaDetailArr} setAlbaDetail={setAlbaDetailArr}/>
                {/*</tr>*/}
                {/*</table>*/}
            </div>

            <div className="mid_box">
            {/*<h3>점수 매기기</h3>*/}
                <div align="center" id="rating">
                    <table>
                        <fieldset>
                        {SCORE.map((i, index) =>
                                  <label className={`${albaScoreArr[index]?'checkStar':''}`}>⭐<input type="radio" className={`scoreSelect`} name={"score_"} value={i}
                                    onChange={()=>onChangeScore(i, index)}/> </label>)
                        }
                        </fieldset>
                    </table>
                </div>
            </div>


            <form onSubmit={ratingSubmit}>
                <button className="ratingBtn" type='submit' size="large">평가하기</button>
            </form>
            
            <a style={{fontSize:"17px", textDecoration:"underline", textUnderlinePosition:"under", color:"black"}} href={'/mypage'}>내가 한 평가 보러가기</a>

        </div>
    );
}
export default Alba_rating;
