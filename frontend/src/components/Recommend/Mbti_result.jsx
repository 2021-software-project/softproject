import {React, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
import MbtiPostings from "./Mbti_postings";

function Mbtiresult(props) {
    const data = useLocation();

    const {ch_areasi} = useSelector(state => state.area_modules);
    const {ch_areagu} = useSelector(state => state.area_modules);
    const {ch_mbti} = useSelector(state => state.area_modules);
    console.log(props.location.state);

    const [jobList, setJobList] = useState([])
    const [code,setCode] = useState('')

    useEffect(() => {
        if (props.location.state === undefined) {
            return (
                <Redirect to={{
                    pathname: '/mbti_rcm',
                    state: {from: props.location}
                }}/>
            )
        }

        if (jobList =='') {
            axios.get('http://localhost:8000/mbtircm/', {
                params: {mbti: ch_mbti},
            }).then((res) => {
                console.log(res.data.job_list)
                setJobList(
                    res.data.job_list
                )
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    const onClickJob=(e)=>{
        setCode(e.target.value)
    }

    return (
        <div>
            <p>MBTI로 아르바이트 추천받기</p>
            <p>당신이 선택한 MBTI : {ch_mbti}</p>
            <p>당신이 선택한 지역 '시' : {ch_areasi}</p>
            <p>당신이 선택한 지역 '구' : {ch_areagu}</p>
            {

                Object.entries(jobList).map(([id,value])=>
                    (<button onClick={onClickJob} value={value}>{id}</button>))
            }
            {code?<MbtiPostings code={code}></MbtiPostings>:''}
        </div>
    );
}
export default Mbtiresult;