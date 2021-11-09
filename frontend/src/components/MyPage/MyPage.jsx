import React, {useEffect, useState} from 'react';
import Axios from "axios";
import GoodBad from './GoodBad_list';
import {Link} from "react-router-dom";
import UserName from "./UserName";
import "../../css/mypage.css";

function MyPage() {

    const [usermbti, setUsermbti] = useState('')
    const [changembti, setChangembti] = useState('ESTP')

    useEffect(()=>{
        let email = localStorage.getItem('email')
        if (email !== null){
            Axios.get(`/user/usermbti/get/${email}`)
                .then(res=>{
                    const data = res.data[0]
                    setUsermbti(data.fields.mbti)
                })
        }
    },[])


    const onChangeMbti=()=>{
        let mbti = changembti
        console.log(mbti)
        let email = localStorage.getItem('email')
        let token = localStorage.getItem('token')
        if (token !== null){
            Axios.post('http://localhost:8000/user/usermbti/change/',
                {email: email, mbti: mbti},
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': 'token ' + token,
                    }
                }).then(res=>{
                    alert(res.data.message)
                    setUsermbti(mbti)
                }).catch(err=>{
                    console.log(err)
            })
        }
    }

    return (
        <div id = "my_container">
            <div className ="mid_box">
            <h1><UserName/> 님의 마이페이지</h1>
                 </div>
            <div id="menu_box">
            <fieldset>
                <p>{usermbti}</p>
                <button onClick={onChangeMbti}>확인</button>
                <ul className="my-page_menu margin">
                            <li className="nav-item"><a className="submenu "
                                                                     href="/MyInfo_edit">● 회원정보수정</a></li>
                    <p></p>
                            <li className="nav-item "><a className="submenu "
                                                                     href="/GoodBad_list">● 좋아요/싫어요 목록보기</a></li>
                     <p></p>
                            <li className="nav-item"><a className="submenu"
                                                                     href="/Rating_list">● 평가목록보기</a></li>


                        </ul>
            </fieldset>
                </div>

        </div>
    )

}
export default MyPage;