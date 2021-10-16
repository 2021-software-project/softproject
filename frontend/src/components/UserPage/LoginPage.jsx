import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import "../../css/login_signup.css"
import LoginSignupform from "./Login_Signup_form";
import Modal from "../../js/Modal";

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)
  const [resetEmail, setResetEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }
    Axios.post('http://127.0.0.1:8000/user/auth/login/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token',res.data.key)
          localStorage.setItem('email',email);

          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/main')
        } else {
          setEmail('')
          setPassword('')
          localStorage.clear()
          setErrors(true)
          console.log(res)
        }
      })
      .catch(err => {
        console.clear()
        console.log(err)
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setEmail('')
        setPassword('')
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
      Axios.post('user/request-reset-email/',data)
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
  return(
      <div className="LoginSignupform">
          <div className="section text-center">
            <h4 className="mb-4 pb-3">Log In</h4>
            {errors === true && <h2>Cannot log in with provided credentials</h2>}
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <input type="email" name="logemail" value={email} onChange={e => setEmail(e.target.value)} required
                     className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>

                      <i className="input-icon uil uil-at"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input type="password" name="logpass" value={password} onChange={e => setPassword(e.target.value)} required
                     className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
                      <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <Input type='submit' className="btn mt-4" value='login' />
                  {/*<a href="#" className="btn mt-4">submit</a>*/}
                </form>
                <React.Fragment>
                   <p className="mb-0 mt-4 text-center"><a href="#0" className="link" onClick={openModal}>비밀번호를 잊어버리셨나요?</a></p>
                        <Modal className="modal" open={ modalOpen } close={ closeModal } header="비밀번호를 잊어버리셨나요?">
                            <div className="Password-Reset-modal">
                                <p>가입하신 이메일을 입력해 주세요.<br/>
                                    비밀번호 재설정 링크를 보내드립니다.</p>
                                <input type="text" onChange={e=>setResetEmail(e.target.value)}  placeholder="email 을 입력해 주세요" /><br/>
                                <input type="button" className="send-email" onClick={onSubmitEmail} value="전송"/>
                                <div className="send-email-state" style={{display : sendEmail? 'block':'none'}}>
                                    <p style={{display : success? 'block':'none'}}>메일을 발송했습니다. 환경에 따라 5분정도 소요될 수 있습니다.<br/>만약 메일함에 메일이 없다면 스팸메일함을 확인해주세요.</p>
                                    <p style={{display : success? 'none':'block'}}>등록되지 않은 이메일 입니다. 다시 확인해주세요.</p>
                                </div>
                                </div>
                        </Modal>
                   </React.Fragment>
          </div>
      </div>

  )

}

export default LoginPage;