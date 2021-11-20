import React, { useState } from "react";
import Axios from 'axios';
import {FaEye, FaEyeSlash} from 'react-icons/fa'
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

      var checkpwd1 = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
      var checkpwd2 = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=*]).*$/;
      if (!checkpwd1.test(newpwd1) && !checkpwd2.test(newpwd1)) {
          alert("비밀번호를 확인해 주세요. 영소문자,숫자 포함 8~16자 [특수문자(!@#$%^&+=*) 가능] ")
          return
      }

      const pwd = {
          new_password1: newpwd1,
          new_password2: newpwd2,
          old_password: oldpwd
      }

      Axios({
          method: 'post',
          url: process.env.REACT_APP_DB_HOST+'user/password/change/',
          headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'},
          data: pwd
      })
          .then(res => {
              if (res.data.detail) {
                  alert("비밀번호가 변경되었습니다.")
                  window.location.replace('/mypage')
              } else {
                  setNewpwd1('')
                  setNewpwd2('')
                  setOldpwd('')
              }
          })
          .catch(err => {
              var errCode = err.response.status;
              try {
                  if (errCode == 400) {
                      //console.log(err.response)
                      if (err.response.data.old_password) {
                          alert("현재 비밀번호가 일치하지 않습니다.")
                          // msg.innerText("현재 비밀번호가 일치하지 않습니다.")
                          setOldpwd('')
                          document.getElementById("oldpwd").focus()
                      } else if (err.response.data.new_password2) {
                          alert(err.response.data.new_password2)
                          // msg.innerText("err.response.data.new_password2")
                          setNewpwd2('')
                          document.getElementById("newpwd2").focus()
                      }
                  }
              } catch (err) {
                  alert("다시 시도해 주시기 바랍니다.");
                  setNewpwd1('');
                  setNewpwd2('');
                  setOldpwd('');
              }
          })
  }
  const [passwordType1, setPasswordType1] = useState({
                                                type: 'password',
                                                visible: false});
  const [passwordType2, setPasswordType2] = useState({
                                                type: 'password',
                                                visible: false});
  const [passwordType3, setPasswordType3] = useState({
                                                type: 'password',
                                                visible: false});
      //password type 변경하는 함수
        const handlePasswordType1 = e => {
            setPasswordType1(() => {
                if (!passwordType1.visible) {
                    return {type: 'text', visible: true};
                }
                return {type: 'password', visible: false};
            })
        }
        const handlePasswordType2 = e => {
            setPasswordType2(() => {
                if (!passwordType2.visible) {
                    return {type: 'text', visible: true};
                }
                return {type: 'password', visible: false};
            })
        }
        const handlePasswordType3 = e => {
            setPasswordType3(() => {
                if (!passwordType3.visible) {
                    return {type: 'text', visible: true};
                }
                return {type: 'password', visible: false};
            })
        }

  return (
      <div className = "password_con-2">
          <div  id="password_con-1 ">
              <form onSubmit={onSubmit} method="GET">
                   <div className ="password_con-2">
                        <table  width ="100%">
                            <tr>
                                <td><input type={passwordType1.type} className="password-input" id="oldpwd" value={oldpwd} onChange={handleOldpwd}
                                        placeholder="현재 비밀번호" />
                                <span className="icon-eye" onClick={handlePasswordType1}>
                                    {  passwordType1.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span></td>
                            </tr>
                            <tr>
                                <td><input type={passwordType2.type}className="password-input" id="newpwd1" value={newpwd1} onChange={handleNewpwd1}
                                        placeholder="새 비밀번호" />
                                <span className="icon-eye" onClick={handlePasswordType2}>
                                    {  passwordType2.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span></td>
                            </tr>
                            <tr>
                                <td><input type={passwordType3.type} className="password-input" id="newpwd2" value={newpwd2} onChange={handleNewpwd2}
                                      placeholder="새 비밀번호 확인" />
                                <span className="icon-eye" onClick={handlePasswordType3}>
                                    {  passwordType3.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span></td>
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