import React, {useEffect, useState} from 'react';
import Axios from "axios";
import GoodBad from './GoodBad_list';
import {Link} from "react-router-dom";
import UserName from "./UserName";
import "../../css/mypage.css";


function MyPage() {

    return (
        <div id = "my_container">
            <div className ="mid_box">
            <h1><UserName/> 님의 마이페이지</h1>
                 </div>
            <div id="menu_box">
            <fieldset>
                <p></p>

                <ul className="my-page_menu margin">
                            <li className="nav-item"><a className="nav-link py-0 "
                                                                     href="/MyInfo_edit">● 회원정보수정</a></li>
                    <p></p>
                            <li className="nav-item "><a className="nav-link py-0 "
                                                                     href="/GoodBad_list">● 좋아요/싫어요 목록보기</a></li>
                     <p></p>
                            <li className="nav-item"><a className="nav-link py-0"
                                                                     href="/Rating_list">● 평가목록보기</a></li>


                        </ul>
            </fieldset>
                </div>

        </div>
    )

}
export default MyPage;