import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import Modal from '../../js/Modal';

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

    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
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

    //개인정보수집 check 확인
    if(!chk){
      alert('개인정보 수집에 동의는 필수사항입니다.')
      return false
    }

    Axios.post('http://localhost:8000/user/auth/signup/', user)
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
            console.log(err)
          //console.clear()
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
      <div className="LoginSignupform">
          <div className="section text-center">
            <h4 className="mb-4 pb-3">Sign Up</h4>
            {errors === true && <h2>Cannot signup with provided credentials</h2>}
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <input type="username" name="username" className="form-style" placeholder="Your UserName(NickName)"
                           value={username} id="username" onChange={onChangeUsername} required autoComplete="off"/>
                      <i className="input-icon uil uil-user"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input type="email" name="email" className="form-style" placeholder="Your Email" id="email"
                           value={email} onChange={onChangeEmail} required autoComplete="off"/>
                      <i className="input-icon uil uil-at"></i>
                  </div>

                  <div className="form-group mt-2">
                    <input type="password" name="password1" className="form-style" placeholder="Your Password(소문자, 숫자, 특수문자 포함 8~16자)" id="password1"
                           value={password1} onChange={onChangePwd1} required autoComplete="off"
                           minLength='8' pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$' />
                      <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input type="password" name="password2" className="form-style" placeholder="Your Password Check(소문자, 숫자, 특수문자 포함 8~16자)" id="password2"
                           value={password2} onChange={onChangePwd2} required autoComplete="off"
                           minLength='8' pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$' />
                      <i className="input-icon uil uil-lock-alt"></i>
                  </div>

                   <React.Fragment>
                        <a onClick={ openModal }>개인정보 수집 동의  </a>
                       <input className="checkbox2" type="checkbox" onClick={onChecked}/>
                        <Modal open={ modalOpen } close={ closeModal } header="개인정보 수집 동의">
                            <h5>1. 수집하는 개인정보 항목 및 이용 목적 </h5>
                            1) 회원가입 시 <br/>
                            - 수집목적 : 회원제 서비스 가입 및 본인여부 확인 <br/>
                            - 수집항목 : 닉네임, 이메일, 비밀번호 <br/>
                            2) 알바 추천 받을 시 <br/>
                            - 수집목적 : 추천 알고리즘 성능 향상 <br/>
                            - 수집항목 : 닉네임, 이메일, mbti, 주소, 알바 평가 <br/>
                            3) 서비스 이용 과정이나 알고리즘 개선 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.<br/>
                            - IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록 <br/>
                            - 모바일 서비스의 특성상 단말기 모델 정보가 수집될 수 있으나, 이는 개인을 식별할 수 없는 형태입니다. <br/>
                            <br/><h5>2. 개인정보의 보유 및 이용기간</h5>
                            해당 웹서비스는 프로젝트를 위한 웹페이지이므로, 프로젝트 종료 후 회원 정보들을 모두 파기할 예정입니다.
                            <br/>회원탈퇴를 요청하거나 개인정보의 수집 및 이용에 대한 동의를 철회하는 경우, 수집 및 이용목적이 달성되거나 이용기간이 종료한 경우 개인정보를 지체 없이 파기합니다.
                            단, 상법 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 법령에서 규정한 보존기간 동안 거래내역과 최소한의 기본정보를 보유합니다.


                        </Modal>

                   </React.Fragment>
                  <Input type='submit' className="btn mt-4" value='SignUp' />
              </form>
          </div>
      </div>
  )



  // return(
  //     <SignupDiv>
  //       <h1>회원가입</h1>
  //       <br/>
  //       {errors === true && <h2>Cannot signup with provided credentials</h2>}
  //       <form onSubmit={onSubmit}>
  //         <label htmlFor='username'>닉네임</label>
  //         <Input
  //           type='username'
  //           value={username} id="username"
  //           onChange={onChangeUsername}
  //           required
  //         />
  //         <br/>
  //         <label htmlFor='email'>이메일 주소</label>
  //         <Input
  //           type='email'
  //           value={email} id='email'
  //           onChange={onChangeEmail}
  //           required
  //         />
  //         <br/>
  //         <label htmlFor='password1'>비밀번호(소문자, 숫자, 특수문자 포함 8~16자):</label>
  //         <Input
  //           type='password'
  //           value={password1} id='password1'
  //           onChange={onChangePwd1}
  //           minLength='8'
  //           pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$'
  //           required
  //         />
  //         <br/>
  //         <label htmlFor='password1'>비밀번호 확인(소문자, 숫자, 특수문자 포함 8~16자):</label>
  //         <Input
  //           type='password'
  //           value={password2} id='password2'
  //           onChange={onChangePwd2}
  //           minLength='8'
  //           pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$'
  //           required
  //         />
  //         <br/>
  //         <input type="checkbox" onClick={onChecked} />개인정보 수집 동의<br/>
  //         <Input type='submit' size="large" value='가입하기' />
  //       </form>
  //     </SignupDiv>
  // )
}

export default SignupPage;