import {React, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import {UpOutlined, ArrowUpOutlined} from '@ant-design/icons';
import axios from "axios";
import Postings from "./postings";
import "../../css/RcmResult.css"
import {changeScore} from "../../store/modules/job_modules";

function Mbtiresult(props) {
    const data = useLocation();

    const {ch_areasi} = useSelector(state => state.area_modules);
    const {ch_areagu} = useSelector(state => state.area_modules);
    const {ch_mbti} = useSelector(state => state.area_modules);
    const {select_area} = useSelector(state => state.area_modules);

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    const mbti = localStorage.getItem("mbti");
    const username = localStorage.getItem("username");

    const SCORE = [5,4,3,2,1];
    const [jobList, setJobList] = useState([])
    const [selJob, setSelJob] = useState(Array(6).fill(false));
    const [code, setCode] = useState('')

    const [satisfyScore, setSatisfyScore] = useState(0);
    const [satisfyScoreId, setSatisfyScoreId] = useState(0);
    const [resultScoreArr, setResultScoreArr] = useState(Array(SCORE.length).fill(false));

    useEffect(() => {

        if (ch_areagu === '') {
            alert('지역을 선택해주세요');
            window.location = '/Mbti_rcm'
        }
        if (props.location.state === undefined) {
            return (
                <Redirect to={{
                    pathname: '/user/mbti_rcm',
                    state: {from: props.location}
                }}/>
            )
        }

        if (jobList == '') {
            axios.get('/user/mbtircm/', {
                params: {mbti: ch_mbti, email: localStorage.getItem("email")},
            }).then((res) => {

                setJobList(
                    res.data.job_list
                )
            }).catch(err => {
                var errCode = err.response.status;

                if (errCode == 401) {
                    alert("다시 로그인 해주시기 바랍니다.")
                    localStorage.clear();
                    window.location = '/login';
                }else if(errCode == 400){
                    alert(err.response.data)
                    console.log(errCode)
                    window.location.href = '/firstulike';
                }
                else{
                    window.location = '/error';
                }
            })
        }
    }, [])

    const onClickJob = (e) => {
        setCode(e.value)

        setSelJob(
            selJob.map((j, index) =>
                index === e.index ? true : false)
        )

    }
    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    const onChangeScore = (ch_score, index) => {
        if(satisfyScore === 0){
            axios.post('/user/resultsatisfy/',
                {
                    email:email, mbti:mbti, rating:ch_score, recommendtype:1
                },
                {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            }).then((res) => {
                setSatisfyScoreId(
                    res.data.id
                )
            }).catch(err => {
                alert(err.response.data)
                var errCode = err.response.status;
                if (errCode == 401) {
                    alert("다시 로그인 해주시기 바랍니다.")
                    localStorage.clear();
                    window.location = '/login';
                }else if(errCode == 400){
                    alert(err.response.data)
                    window.location = '/firstulike';
                }
                else{
                    window.location = '/error';
                }
            })
        }
        else{
            axios.put(`/user/resultsatisfy/${satisfyScoreId}`,{
                email:email, mbti:mbti, rating:ch_score, recommendtype:1
            },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            }).then(function (response){

            })
        }
        setSatisfyScore(ch_score)
        setResultScoreArr(
            resultScoreArr.map((a, i)=>
                i>=index ? true : false)
        )
    }
    const reRecommend = ()=>{
        window.location.href='/main';
    }
    const goRating = ()=>{
        window.location.href='/Alba_rating';
    }

    return (
        ch_areagu != '' ?
            <div className="rcm-result">
                <p className="info">
                    <span className="infoFont">{ch_mbti} {username}님 맞춤알바</span><p/>
                    <span className="selectedAreaFont">{select_area[0]} {select_area[1]}</span>
                    {select_area.length > 2 ?
                        <span className="selectedAreaFont">{select_area[2]} {select_area[3]}</span> : ''}
                    {select_area.length > 4 ?
                        <span className="selectedAreaFont">{select_area[4]} {select_area[5]}</span> : ''}
                </p>

                <div className="div-btn">
                    {
                        Object.entries(jobList).map(([id, value], index) =>
                            (
                                <div className="button-4">
                                    <div className="eff-4"></div>
                                    <button className={`button-4-child${selJob[index] ? ' clicked' : ''}`}
                                            onClick={() => onClickJob({value, index})} value={value}> {id} </button>
                                </div>
                            ))
                    }
                </div>

                <div className="scrollUp" onClick={scrollUp}><ArrowUpOutlined/></div>

                {code ? <Postings code={code}></Postings> : ''}
                <div>
                    <br/>
                    <h2>추천 결과가 어떠신가요?</h2>
                    <span>이전에 경험한 알바를 평가하면 더 좋은 결과를 받으실 수 있습니다</span><br/>
                    <fieldset>
                        {SCORE.map((i, index) =>
                                  <label className={`${resultScoreArr[index]?'checkStar':''}`}>⭐<input type="radio" className={`scoreSelect`} name={"score_"} value={i}
                                    onChange={()=>onChangeScore(i, index)}/> </label>)
                        }
                    </fieldset>
                    <br/><br/>
                    <button className="button_primary" onClick={reRecommend}> 다시추천받기</button>
                </div>


            </div> : ''
    );
}
export default Mbtiresult;