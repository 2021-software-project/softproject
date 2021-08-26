import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import "../../css/login_signup.css"

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

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

          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
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


  return(
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
        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
      </div>

  )

  // return (
  //   <LoginDiv>
  //     <h1>로그인</h1>
  //     <br />
  //     {errors === true && <h2>Cannot log in with provided credentials</h2>}
  //       <form onSubmit={onSubmit}>
  //         <label>이메일 주소:</label>
  //         <Input
  //           type='email'
  //           value={email}
  //           required
  //           onChange={e => setEmail(e.target.value)}
  //         />
  //         <br/>
  //         <label>비밀번호:</label>
  //         <Input
  //           type='password'
  //           value={password}
  //           required
  //           onChange={e => setPassword(e.target.value)}
  //         />
  //         <br/>
  //         <Input type='submit' size="large" value='로그인' />
  //       </form>
  //     <br/>
  //     <Link to='/signup/'>회원가입</Link>
  //   </LoginDiv>
  // )
}

export default LoginPage;