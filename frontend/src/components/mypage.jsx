import React, {useEffect, useState} from 'react';
import Axios from "axios";
import GoodBad from './MyPage/GoodBad_list';
import {Link} from "react-router-dom";
import UserName from "./MyPage/UserName";

function MyPage() {

    const [user, setUser] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
            Axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
            }).then(res => {
                setUser(
                    res.data.username
                )
                console.log(res.data)
            });
        }
        console.log("user : " + user)

    }, [])
    return (
        <div>
            {/*<span>{user}님의</span>*/}

            <h1><UserName/>님의 마이페이지</h1>
            <fieldset>
                <legend>메뉴</legend>
                <Link to="MyInfo_edit">
                    회원정보수정
                </Link><br></br>
                <Link to="GoodBad_list">
                    좋아요/싫어요 목록보기
                </Link><br></br>
                <Link to="Rating_list">
                    평가목록보기
                </Link>
            </fieldset>
        </div>
    )

}
export default MyPage;