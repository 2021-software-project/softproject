import React, {useEffect, useState} from 'react';
import Axios from "axios";
import UserName from "./UserName";
import GoodBad from "./GoodBad_list";
import Rating from "./Rating_list";
import "../../css/mypage.css";
import Modal from "../../js/Modal";
import PasswordUpdate from "./PasswordUpdate";

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

    const [usermbti, setUsermbti] = useState(localStorage.getItem("mbti"))
    const [selMbti, setMbtiSelected] = useState('');

    const MbtiList = ["ENTP", "ENTJ", "ENFP", "ENFJ", "ESTP", "ESTJ", "ESFP", "ESFJ",
      "INTP", "INTJ", "INFP", "INFJ", "ISTP", "ISTJ", "ISFP", "ISFJ"];

    useEffect(()=>{
        let token = localStorage.getItem('token')
        let email = localStorage.getItem('email')
        if (email !== null){
            Axios.get(`/user/usermbti/get/${email}`, {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            }).then(res=>{
                    setUsermbti(res.data)
                    setMbtiSelected(res.data)
                    console.log(res.data)
                })
        }
    },[])


    const onChangeMbti=(e)=>{
        setMbtiSelected(e.target.value)
    }

    const onSubmitMbit=()=>{
        let mbti = selMbti
        let email = localStorage.getItem('email')
        let token = localStorage.getItem('token')
        if (token !== null){
            Axios.post('/user/usermbti/change/',
                {email: email, mbti: mbti},
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': 'token ' + token,
                    }
                }).then(res=>{
                    alert(res.data.message)
                    setModalOpen1(false);
                    setUsermbti(mbti)
                    localStorage.setItem("mbti",mbti)
                }).catch(err=>{
                    console.log(err)
            })
        }
    }
    const [ modalOpen1, setModalOpen1 ] = useState(false);
    const [ modalOpen2, setModalOpen2 ] = useState(false);
    const openModal1 = () => {
        setModalOpen1(true);
    }
    const closeModal1 = () => {
        setModalOpen1(false);
    }
    const openModal2 = () => {
        setModalOpen2(true);
    }
    const closeModal2 = () => {
        setModalOpen2(false);
    }

    return (
        <div id = "mypage">
            <div className ="mid_box">
            <h1>마이페이지</h1>
             </div>
            <table className="userInfo">
                <tr height="50">
                    <td className="username" ><div><UserName/></div></td>
                    <td className="useremail">{localStorage.getItem("email")}</td>
                </tr>
                <tr height="50">
                    <td className="username" rowSpan={2}><img className="img-mbti" src={require(`../../img/mbtiIcon/${usermbti}.png`).default}/></td>
                    <td className="mbti"><p>{usermbti} <button className="btn-mbti-edit" onClick={openModal1}>수정</button> </p> </td>
                </tr>
                <tr height="50">
                    <td className="password"><p> <button className="btn-password-edit" onClick={openModal2}>비밀번호 수정</button> </p> </td>
                </tr>
            </table>
            <div className="Mbti-Change-modal">
                <React.Fragment>
                    <Modal open={ modalOpen1 } close={ closeModal1 } header="MBTI 변경">
                       <p> 변경할 MBTI를 선택해주세요.</p>
                       <select required="true" className="form-style selectMbti" onChange={onChangeMbti} value={selMbti}>
                            <option label="select MBTI" value=""></option>
                            {MbtiList.map((item) => (
                                <option style={{height: 10}} value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                       <input type="button" className="send-mbti" onClick={onSubmitMbit} value="변경" />
                    </Modal>
                </React.Fragment>
            </div>
            <div className="Password-Change-modal">
                <React.Fragment>
                    <Modal open={ modalOpen2 } close={ closeModal2 } header="비밀번호 변경">
                       <div className="my_container2" >
                           <div className="point_box " id="password_con-1">
                               <div className ="inner_box">
                                   <PasswordUpdate />
                               </div>
                           </div>
                       </div>
                    </Modal>
                </React.Fragment>
            </div>

            <div id="menu_box">
                <table class="mypageTable">
                    {/*<tr class="mypageTableRow">*/}
                        {/*<td className={`mypageTableCell${selMenu[0]?' clicked':''}`}> <span onClick={openModal}>MBTI 수정</span></td>*/}
                        {/*<td className={`mypageTableCell${selMenu[1]?' clicked':''}`}> <span onClick={myInfoEdit}>비밀번호 수정</span></td>*/}
                    {/*</tr>*/}
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