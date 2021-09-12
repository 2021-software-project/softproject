import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Postings from "./postings";
import Axios from "axios";

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

function Personal_result(props) {

    const {ch_mbti} = '';
    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);

    const [jobList, setJobList] = useState([])
    const [code,setCode] = useState('')
    const [user, setUser] = useState('')


    useEffect(() => {
        if (props.location.state === undefined) {
            return (
                <Redirect to={{
                    pathname: '/mbti_rcm',
                    state: {from: props.location}
                }}/>
            )
        }
        let token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null && user=='') {
            Axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
            }).then(res => {
                setUser(
                    res.data.username
                )
                console.log(res.data.username)
            });
        }


    }, [])

    useEffect(()=>{
        if (jobList == '') {
            axios.get('/persrcm/', {
                params: {username: user},
            }).then((res) => {
                console.log(res.data.job_list)
                setJobList(
                    res.data.job_list
                )
            }).catch(err => {
                console.log(err)
            })
        }
    },[user])

    const onClickJob=(e)=>{
        setCode(e.target.value)
        console.log("code"+code)
    }

    return (
        <div>
            <InfoDiv>
                <p className="info">
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
        </div>
    );
}
export default Personal_result;