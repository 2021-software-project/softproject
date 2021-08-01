import React, { useState } from "react";
import Axios from 'axios';

function PasswordUpdate() {
  const [oldpwd, setOldpwd] = useState("");
  const [newpwd1, setNewpwd1] = useState("");
  const [newpwd2, setNewpwd2] = useState("");

  const handleOldpwd = ({ target: { value } }) => setOldpwd(value);
  const handleNewpwd1 = ({ target: { value } }) => setNewpwd1(value);
  const handleNewpwd2 = ({ target: { value } }) => setNewpwd2(value);

  let token = localStorage.getItem('token')

  const onSubmit=(e)=>{
      e.preventDefault()

      const pwd = {
          new_password1 : newpwd1,
          new_password2 : newpwd2,
          old_password : oldpwd
      }

      Axios({
          method : 'post',
          url : 'user/auth/password/change/',
          headers : {'Authorization':'token '+ token, 'Content-Type': 'application/json'},
          data : pwd
        })
          .then(res =>{
              if(res.data.detail){
                  console.log(res.data)
                  alert("비밀번호가 변경되었습니다.")
                  window.location.replace('/mypage')
              }
              else{
                  setNewpwd1('')
                  setNewpwd2('')
                  setOldpwd('')
              }
          })
          .catch(err=>{
              if(err.response.data.old_password){
                  alert("현재 비밀번호가 일치하지 않습니다.")
                  setOldpwd('')
                  document.getElementById("oldpwd").focus()
              }
              else if(err.response.data.new_password2){
                  alert("새 비밀번호가 일치하지 않습니다.")
                  setNewpwd2('')
                  document.getElementById("newpwd2").focus()
              }
          })
    }
  return (
    <form onSubmit={onSubmit}>
        현재 비밀번호 &nbsp;
        <input type="password" id="oldpwd" value={oldpwd} onChange={handleOldpwd} /> <br/>
        새 비밀번호 &nbsp;
        <input type="password" id="newpwd1" value={newpwd1} onChange={handleNewpwd1}/> <br/>
        새 비밀번호 확인 &nbsp;
        <input type="password" id="newpwd2" value={newpwd2} onChange={handleNewpwd2} /> <br/>
        &nbsp;
      <button type="submit" >변경하기</button>
    </form>
  );
}

export default PasswordUpdate