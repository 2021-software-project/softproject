import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";
import UserName from "./UserName";
import GoodBad from "./GoodBad_list";
import Rating from "./Rating_list";
import "../../css/mypage.css";


function MyPage() {


    const [selMenu, setSelMenu] = useState([false, false, false, false]);
    const myInfoEdit=()=>{
        window.location.replace('/MyInfo_edit');
    }
    const GoodBadList=(e)=>{
        setSelMenu(
            selMenu.map((m, index)=>
                index === 2? true:false)
        )
    }
    const RatingList=(e)=>{
        setSelMenu(
            selMenu.map((m, index)=>
            index === 3? true:false)
        )
        //window.location.replace('/Rating_list');
    }
    const [usermbti, setUsermbti] = useState('')
    const [changembti, setChangembti] = useState('ESTP')

    let token = localStorage.getItem('token')
    useEffect(()=>{
        let email = localStorage.getItem('email')
        if (email !== null){
            Axios.get(`/user/usermbti/get/${email}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': 'token ' + token,
                    }})
                .then(res=>{
                    console.log(res.data)
                    setUsermbti(res.data)
                })
        }
    },[])


    const onChangeMbti=()=>{
        let mbti = changembti
        console.log(mbti)
        let email = localStorage.getItem('email')

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
        <div id = "mypage">
            <div className ="mid_box">
            <h1>마이페이지</h1>
             </div>

            <table className="userInfo">
                <tr height="50">
                    <td className="username" rowSpan={2}><div><UserName/>님</div></td>
                    <td className="useremail">{localStorage.getItem("email")}</td>
                </tr>
                <tr height="50">
                    <td className="mbti"><p>{usermbti}</p></td>
                </tr>
            </table>

            {/*<p>{usermbti}</p>
                <button onClick={onChangeMbti}>확인</button>*/}
            <div id="menu_box">
                <table class="mypageTable">
                    <tr class="mypageTableRow">
                        <td className={`mypageTableCell${selMenu[0]?' clicked':''}`}> <span onClick={myInfoEdit}>MBTI 수정</span></td>
                        <td className={`mypageTableCell${selMenu[1]?' clicked':''}`}> <span onClick={myInfoEdit}>비밀번호 수정</span></td>
                    </tr>
                    <tr className="mypageTableRow">
                        <td className={`mypageTableCell${selMenu[2]?' clicked':''}`}><span onClick={()=>GoodBadList(2)}>좋아요/싫어요 목록보기</span></td>
                        <td className={`mypageTableCell${selMenu[3]?' clicked':''}`}><span onClick={()=>RatingList(3)}>평가목록보기</span></td>
                    </tr>

                </table>
                </div>

            <div id="mypageDetail">
                {selMenu[2]? <GoodBad/> :''}
                {selMenu[3]? <Rating/> :'' }
            </div>

        </div>
    )

}
export default MyPage;