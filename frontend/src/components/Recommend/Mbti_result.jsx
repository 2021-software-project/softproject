import {React, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import {UpOutlined, ArrowUpOutlined} from '@ant-design/icons';
import axios from "axios";
import Postings from "./postings";
import "../../css/RcmResult.css"

function Mbtiresult(props) {
    const data = useLocation();

    const {ch_areasi} = useSelector(state => state.area_modules);
    const {ch_areagu} = useSelector(state => state.area_modules);
    const {ch_mbti} = useSelector(state => state.area_modules);
    const {select_area} = useSelector(state => state.area_modules);
    console.log(props.location.state);
    console.log(props);

    const [jobList, setJobList] = useState([])
    const [selJob, setSelJob] = useState(Array(6).fill(false));
    const [code,setCode] = useState('')

    useEffect(() => {

        if(ch_areagu===''){
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

        if (jobList =='') {
            axios.get('/user/mbtircm/', {
                params: {mbti: ch_mbti, email: localStorage.getItem("email")},
            }).then((res) => {
                console.log(res.data.job_list)
                setJobList(
                    res.data.job_list
                )
            }).catch(err => {
                alert(err.response.data)
                window.location = '/firstulike'
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
    const scrollUp=()=>{
        window.scrollTo(0,0);
    }


    return (
        ch_areagu!=''?
        <div className="rcm-result">
            <p className="info">
                <span className="infoFont">{ch_mbti} "이름"님 맞춤알바</span><p/>
                {/*<span># {ch_mbti}</span>*/}
                <span className="selectedAreaFont">{select_area[0]} {select_area[1]}</span>
                {/*<span># {ch_areagu}</span>*/}
                {select_area.length > 2 ? <span className="selectedAreaFont">{select_area[2]} {select_area[3]}</span> : ''}
                {select_area.length > 4 ? <span className="selectedAreaFont">{select_area[4]} {select_area[5]}</span> : ''}
            </p>

            <div className="div-btn">
            {
                Object.entries(jobList).map(([id,value], index)=>
                    (
                        <div className="button-4">
                            <div className="eff-4"></div>
                            <button className={`button-4-child${selJob[index] ? ' clicked' : ''}`}
                                    onClick={()=>onClickJob({value,index})} value={value}> {id} </button>
                        </div>
                    ))
            }
            </div>
            <div className="scrollUp" onClick={scrollUp}><ArrowUpOutlined /></div>
            {code?<Postings code={code}></Postings>:''}
            <br/><br/>
        </div>:''
    );
}
export default Mbtiresult;