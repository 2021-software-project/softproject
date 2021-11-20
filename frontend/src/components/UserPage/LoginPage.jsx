import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import "../../css/login_signup.css"
import LoginSignupform from "./Login_Signup_form";
import Modal from "../../js/Modal";
import axios from "axios";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Logout} from "../UserPage/Logout";

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [ratinglist, checkRatinglikst] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }

    Axios.post(process.env.REACT_APP_DB_HOST +'/user/login/', user)
      .then(res => {
        /*alert("user", user.email, user.password)
        alert("res",res)*/
        if (res.data.token) {
            let token = res.data.token;
            // let username = res.data
            localStorage.setItem('token',token);
            localStorage.setItem('email',email);
            // localStorage.setItem('username',username);


            Axios.get(process.env.REACT_APP_DB_HOST +`/user/detail/${email}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': 'token ' + token,
                    }})
                .then(response=>{

                    localStorage.setItem('mbti', response.data.mbti)
                    localStorage.setItem('username', response.data.username)

                    //평가목록 접근해서 하나도 없으면 first로 가도록
                    axios.get(process.env.REACT_APP_DB_HOST +`/user/userrating/?search=${email}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Token ${token}`
                        }
                        })
                        .then((Response) => {
                            if(Response.data.length === 0){
                                window.location.replace('/firstulike')
                            }
                            else{
                                window.location.replace('/main')
                            }

                        })
                        .catch((Error) => {

                            alert('메인 페이지로 이동합니다.')
                            window.location = '/main'
                        })

                }).catch(err=>{

                    Logout()
                    alert('다시 로그인해주시기 바랍니다.')
                    window.location.replace('/login')
                })
        } else {
            alert('다시 로그인해주시기 바랍니다.')
            setEmail('')
            setPassword('')
            localStorage.clear()

        }
      })
      .catch(err => {
          var errCode = err.response.status
          if (errCode == 401) {
              alert('아이디 또는 비밀번호가 일치하지 않습니다.');
              setPassword('');
              //setEmail('')
          }
          else{
              alert('다시 시도해주시기바랍니다.');
              window.location = '/login';
          }
      })
  }
  const [ modalOpen, setModalOpen ] = useState(false);
  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
      setSendEmail(false);
  }

  const [sendEmail, setSendEmail] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmitEmail = () =>{
      const data = {
          email: resetEmail,
      }
      //재전송을 위해 button 누를 때 마다 send-email-check 제거
      setSendEmail(false);
      //또 전송 버튼을 누르지 않게 하기 위해 버튼 없애기
      const button = document.getElementsByClassName("send-email")
      button[0].style = "display:none"
      Axios.post(process.env.REACT_APP_DB_HOST +'/user/request-reset-email/',data)
          .then(res=>{
              setSendEmail(true);
              setSuccess(true);
              button[0].value="재전송";
              button[0].style = "display:unset";
          })
          .catch(err=>{
              setSendEmail(true);
              button[0].style = "display:unset";
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
  return(
      <div className="LoginSignupform">
          <div className="section text-center">
            <h4 className="mb-4 pb-3">LOG IN</h4>
              <form onSubmit={onSubmit} method="GET">
                  <div className="form-group">
                    <input type="email" name="logemail" value={email} onChange={e => setEmail(e.target.value)} required
                     className="form-style" placeholder="이메일" id="logemail" autoComplete="off"/>
                      <i className="input-icon uil uil-at"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input type={passwordType.type} name="logpass" value={password} onChange={e => setPassword(e.target.value)} required
                     className="form-style" placeholder="비밀번호" id="logpass" autoComplete="off"/>
                      <span className="icon-eye" onClick={handlePasswordType}>
                                    {  passwordType.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span>
                      <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <button type='submit' className="btn mt-4" value='login'>LOGIN</button>
                  {/*<a href="#" className="btn mt-4">submit</a>*/}
                </form>
              <p className="mb-0 mt-4 text-center">
                  <a href="#0" className="link" style={{textDecoration:"underline", textUnderlinePosition:"under"}} onClick={openModal}>
                      비밀번호를 잊어버리셨나요?
                  </a></p>
              <div className="Password-Reset-modal">
                <React.Fragment>
                    <Modal className="modal" open={ modalOpen } close={ closeModal } header="비밀번호를 잊어버리셨나요?">
                        {/*<div className="Password-Reset-modal">*/}
                        <p>가입하신 이메일을 입력해 주세요.<br/>
                            비밀번호 재설정 링크를 보내드립니다.</p>
                        <input type="text" onChange={e=>setResetEmail(e.target.value)}  placeholder="email 입력" />
                        <input type="button" className="send-email" onClick={onSubmitEmail} value="전송"/>
                        <div className="send-email-state" style={{display : sendEmail? 'block':'none'}}>
                            <p style={{display : success? 'block':'none'}}>메일을 발송했습니다. 환경에 따라 5분정도 소요될 수 있습니다.<br/>만약 메일함에 메일이 없다면 스팸메일함을 확인해주세요.</p>
                            <p style={{display : success? 'none':'block'}}>등록되지 않은 이메일 입니다. 다시 확인해주세요.</p>
                        </div>
                        {/*</div>*/}
                    </Modal>
                </React.Fragment>
              </div>
          </div>
      </div>

  )

}

export default LoginPage;