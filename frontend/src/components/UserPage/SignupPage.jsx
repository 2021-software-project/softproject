import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';

const SignupDiv = styled.div`
  padding: 3rem;
    form {
    width: 320px;
    display: inline-block;
    label {
      margin-bottom: 1rem;
    }
    input {
      margin-bottom: 1.5rem;
      &[type=submit] {
        background: black;
        color: white;
        margin-top: 1rem;
      }
    }
  }
`;

const SignupPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState(false)
  const [chk,setChk] = useState(false)

  // 지우기
  useEffect(()=>{
    console.log(chk)
  },[])


  const onChangeUsername = (e)=>{
    setUsername(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePwd1 = (e) => {
    setPassword1(e.target.value)
  }

  const onChangePwd2 = (e) => {
    setPassword2(e.target.value)
  }
  const onChecked = (e) =>{
    if(e.target.checked) {
      setChk(true)
      console.log(chk)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      username : username,
      email: email,
      password1: password1,
      password2: password2
    }
    console.log(user);

    // 개인정보수집 check 확인
    if(!chk){
      alert('개인정보 수집에 동의는 필수사항입니다.')
      return false
    }

    Axios.post('/user/auth/signup/', user)
        .then(res => {
          if (res.data.key) {
            alert("회원가입을 축하드립니다 !")
            window.location.replace('/login')
          }
          else {
            setUsername('')
            setEmail('')
            setPassword1('')
            setPassword2('')
            localStorage.clear()
            setErrors(true)
          }
        })
        .catch(err => {
          console.clear()
          if(err.response.data.email){
            alert("이미 사용중인 email 입니다.")
            document.getElementById("email").focus()
          }
          else if(err.response.data.username) {
            alert("이미 사용중인 닉네임 입니다")
            document.getElementById("username").focus()
          }
          else if(err.response.data.non_field_errors){
            alert("비밀번호가 일치하지 않습니다.")
            setPassword2('')
            document.getElementById("password2").focus()
          }
        })
  }
  return(
      <SignupDiv>
        <h1>회원가입</h1>
        <br/>
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <form onSubmit={onSubmit}>
          <label htmlFor='username'>닉네임</label>
          <Input
            type='username'
            value={username} id="username"
            onChange={onChangeUsername}
            required
          />
          <br/>
          <label htmlFor='email'>이메일 주소</label>
          <Input
            type='email'
            value={email} id='email'
            onChange={onChangeEmail}
            required
          />
          <br/>
          <label htmlFor='password1'>비밀번호(소문자, 숫자, 특수문자 포함 8~16자):</label>
          <Input
            type='password'
            value={password1} id='password1'
            onChange={onChangePwd1}
            minLength='8'
            pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$'
            required
          />
          <br/>
          <label htmlFor='password1'>비밀번호 확인(소문자, 숫자, 특수문자 포함 8~16자):</label>
          <Input
            type='password'
            value={password2} id='password2'
            onChange={onChangePwd2}
            minLength='8'
            pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$'
            required
          />
          <br/>
          <input type="checkbox" onClick={onChecked} />개인정보 수집 동의<br/>
          <Input type='submit' size="large" value='가입하기' />
        </form>
      </SignupDiv>
  )
}

export default SignupPage;