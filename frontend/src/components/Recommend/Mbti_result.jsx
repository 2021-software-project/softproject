import {React, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
import Postings from "./postings";
import styled from "styled-components";

const InfoDiv = styled.div`
  .info{
    color: #ffc107;
    font-size: 30px;
    margin-top: 1rem;
    span{
        margin : 0 10px;
    }
  }
`;

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
            axios.get('/mbtircm/', {
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
        console.log("code"+code)
    }

    return (
        <div>
            <InfoDiv>
                <p className="info">
                    <span># {ch_mbti}</span>
                    <span># {ch_areasi}</span>
                    <span># {ch_areagu}</span>
                </p>
            </InfoDiv>
            <div className="div-btn">
            {
                Object.entries(jobList).map(([id,value])=>
                    // (<div><button className="btn-job" onClick={onClickJob} value={value}>{id}</button></div>))
                    (
                        <div className="button-4">
                            <div className="eff-4"></div>
                            <button onClick={onClickJob} value={value}> {id} </button>
                        </div>
                    ))
            }
            </div>
            {code?<Postings code={code}></Postings>:''}
            <br/><br/>
        </div>
    );
}
export default Mbtiresult;