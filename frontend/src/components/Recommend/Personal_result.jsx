import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import Axios from "axios";
import Postings from "./postings";
import "../../css/RcmResult.css"

function Personal_result(props) {

    const {ch_mbti} = '';
    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);

    const [jobList, setJobList] = useState([])
    const [selJob, setSelJob] = useState(Array(6).fill(false));
    const [code,setCode] = useState('')
    const [user, setUser] = useState('')


    useEffect(() => {
        if (props.location.state === undefined) {
            return (
                <Redirect to={{
                    pathname: '/user/mbti_rcm',
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
            Axios.get('/user/persrcm/', {
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
        setCode(e.value)
        console.log("code"+code)
        setSelJob(
            selJob.map((j, index)=>
            index === e.index? true:false)
        )
    }

    return (
        <div className="rcm-result">
            <p className="info">
                <span># {ch_areasi}</span>
                <span># {ch_areagu}</span>
            </p>
            <div className="div-btn">
            {
                Object.entries(jobList).map(([id,value], index)=>
                    // (<div><button className="btn-job" onClick={onClickJob} value={value}>{id}</button></div>))
                    (
                        <div className="button-4">
                            <div className="eff-4"></div>
                            <button className={`button-4-child${selJob[index] ? ' clicked' : ''}`} onClick={()=>onClickJob({value, index})} value={value}> {id} </button>
                        </div>
                    ))
            }
            </div>
            {code?<Postings code={code}></Postings>:''}
        </div>
    );
}
export default Personal_result;