import {React, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
import Postings from "./postings";
import "../../css/RcmResult.css"

function Mbtiresult(props) {
    const data = useLocation();

    const {ch_areasi} = useSelector(state => state.area_modules);
    const {ch_areagu} = useSelector(state => state.area_modules);
    const {ch_mbti} = useSelector(state => state.area_modules);
    console.log(props.location.state);

    const [jobList, setJobList] = useState([])
    const [selJob, setSelJob] = useState(Array(6).fill(false));
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
            axios.get('http://127.0.0.1:8000/mbtircm/', {
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
        setCode(e.value)
        console.log("code"+code)

        setSelJob(
            selJob.map((j, index)=>
            index === e.index? true:false)
        )
        console.log(selJob);
    }


    return (
        <div className="rcm-result">
            <p className="info">
                <span># {ch_mbti}</span>
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
                            <button className={`button-4-child${selJob[index] ? ' clicked' : ''}`} onClick={()=>onClickJob({value,index})} value={value}> {id} </button>
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