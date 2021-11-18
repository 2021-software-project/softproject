import React, { useState } from "react";
import Axios from 'axios';

import "../../css/mypage.css";

function PasswordUpdate() {
  const [oldpwd, setOldpwd] = useState("");
  const [newpwd1, setNewpwd1] = useState("");
  const [newpwd2, setNewpwd2] = useState("");

  const handleOldpwd = ({ target: { value } }) => setOldpwd(value);
  const handleNewpwd1 = ({ target: { value } }) => setNewpwd1(value);
  const handleNewpwd2 = ({ target: { value } }) => setNewpwd2(value);

  let token = localStorage.getItem('token')

  const onSubmit=(e)=> {
      e.preventDefault()

      const pwd = {
          new_password1: newpwd1,
          new_password2: newpwd2,
          old_password: oldpwd
      }

      Axios({
          method: 'post',
          url: 'user/auth/password/change/',
          headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'},
          data: pwd
      })
          .then(res => {
              if (res.data.detail) {
                  console.log(res.data)
                  alert("비밀번호가 변경되었습니다.")
                  window.location.replace('/mypage')
              } else {
                  setNewpwd1('')
                  setNewpwd2('')
                  setOldpwd('')
              }
          })
          .catch(err => {
              if (err.response.data.old_password) {
                  alert("현재 비밀번호가 일치하지 않습니다.")
                  setOldpwd('')
                  document.getElementById("oldpwd").focus()
              } else if (err.response.data.new_password2) {
                  alert("새 비밀번호가 일치하지 않습니다.")
                  setNewpwd2('')
                  document.getElementById("newpwd2").focus()
              }
          })
  }

      const [passwordType, setPasswordType] = useState({
                                                type: 'password',
                                                visible: false});
      //password type 변경하는 함수
        const handlePasswordType = e => {
            setPasswordType(() => {
                if (!passwordType.visible) {
                    return {type: 'text', visible: true};
                }
                return {type: 'password', visible: false};
            })
        }

  return (
      <div className = "password_con-2">
          <div  id="password_con-1 ">
              <form onSubmit={onSubmit}>
                   <div className ="password_con-2">
                        <table  width ="100%">
                            <tr>
                                {/*<td><span>현재 비밀번호 </span></td>*/}
                                <td><input type={passwordType.type} className="password-input" id="oldpwd" value={oldpwd} onChange={handleOldpwd}
                                        placeholder="현재 비밀번호" />
                                <span onClick={handlePasswordType}>
                                    {  passwordType.visible ? <span>숨기기</span> : <span>보이기</span>  }</span></td>
                            </tr>
                            <tr>
                                {/*<td><span>새 비밀번호</span><br/></td>*/}
                                <td><input type="password" className="password-input" id="newpwd1" value={newpwd1} onChange={handleNewpwd1}
                                        placeholder="새 비밀번호" /></td>
                            </tr>
                            <tr>
                                {/*<td><span>새 비밀번호 확인</span><br/></td>*/}
                                <td><input type="password" className="password-input" id="newpwd2" value={newpwd2} onChange={handleNewpwd2}
                                      placeholder="새 비밀번호 확인" /></td>
                            </tr>
                        </table>
                   </div>

                  <div clsssName="button_box">
                    <button className="button_primary" type="submit" >변경하기</button>
                  </div>


        </form>
          </div>

      </div>



  );
}

export default PasswordUpdate