import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import JobPostingModal from "../../js/JobPostingModal";
import "../../css/Mbti_result.css"
import axios from "axios";

function Mbtiresult(props) {
    const data = useLocation();

    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const {ch_mbti} = useSelector(state=>state.area_modules);
    //console.log(props.location.state);

    const [email, setEmail] = useState('')
    const token = localStorage.getItem('token')
    useEffect(() => {   //추가
        if (localStorage.getItem('token') !== null) {
            axios({
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

    const [ modalOpen, setModalOpen ] = useState(false);
    const [ showingurl, setshowingurl] = useState("");

    const [postingLike, setPostingLike] = useState(0);

    const [start_time, setStartTime] = useState(0);
    let stay_time;

    const openModal = (e) => {
        setModalOpen(true);
        setStartTime(new Date());
        console.log("open: "+ start_time);
    }
    const closeModal = () => {
        stay_time = (new Date()-start_time)/1000;
        setModalOpen(false);
        setshowingurl("");

         const whatPostingLike = {
            email: email,
            post_id : 0,
            jobcode : "0000",
            like: postingLike,
            stay_time: stay_time,
         }
        console.log(whatPostingLike);

         axios.post("/user/userpostinglike/", whatPostingLike,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            })
            .catch(function (err){
              console.log(err)
        })

       setPostingLike(0);
    }


    let urls = ["https://www.albamon.com/recruit/view/gi?AL_GI_No=78343405&mj_stat=0&optgf=",
                    "https://www.albamon.com/recruit/view/gi?AL_GI_No=78176397&mj_stat=0&optgf=",];
    let store = ["온달집건대점", "꽃배달서비스"];


    if (props.location.state === undefined) {
        return(
            <
                        Redirect to={{
                                    pathname: '/mbti_rcm',
                                    state: {from: props.location}
                                  }}
                    />
    )}
    else {
        return (
            <div>
                <h1>MBTI로 아르바이트 추천받기</h1>
                <h2>당신이 선택한 MBTI : {ch_mbti}</h2>
                <h2>당신이 선택한 지역 '시' : {ch_areasi}</h2>
                <h2>당신이 선택한 지역 '구' : {ch_areagu}</h2>

                <br/>
                <div>


                <table align="center">
                  {store.map((sto, index) => (
                    <tr key={index}>
                        <a onClick={ ()=> (openModal, setshowingurl(urls[index].replace("www", "m"))) } ><h3>{sto}</h3> </a>
                    </tr>
                  ))}
                </table>
                </div>

                <JobPostingModal open={ modalOpen } close={ closeModal } setPostingLike = {setPostingLike} postingLike={postingLike}>
                    <iframeCon>
                        <div className="iframe-container">
                            <iframe  src={showingurl}>대체내용</iframe>
                        </div>
                    </iframeCon>
                </JobPostingModal>


            </div>
        )
   }
}
export default Mbtiresult;