import React, {useState, useEffect, useMemo} from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import styled from 'styled-components';
import Modal from '../../js/Modal';
import Cookies from "universal-cookie";

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
  //const [mbti, setMbti] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState(false)
  const [chk,setChk] = useState(false)

  // 지우기
  useEffect(()=>{

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
    }
  }

  const MbtiList = ["ENTP", "ENTJ", "ENFP", "ENFJ", "ESTP", "ESTJ", "ESFP", "ESFJ",
      "INTP", "INTJ", "INFP", "INFJ", "ISTP", "ISTJ", "ISFP", "ISFJ"];


  const [selMbti, setMbtiSelected] = useState("");

  const onChangeMbti = (e) => {
    setMbtiSelected(e.target.value);
  };

    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const cookies = new Cookies();
    const csrftoken = cookies.get('csrftoken');




  const onSubmit = (e) => {
      e.preventDefault()

      var checkpwd1 =/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
      var checkpwd2 = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=*]).*$/;

      if (!checkpwd1.test(password1)&&!checkpwd2.test(password1)){
          alert("비밀번호를 확인해 주세요. 영소문자,숫자 포함 8~16자 [특수문자(!@#$%^&+=*) 가능] ")
          return
      }

      const user = {
          username: username,
          email: email,
          password1: password1,
          password2: password2,
          mbti:selMbti,
          sns:'' // 없어도 user db 에 들어감
      }


      //개인정보수집 check 확인
      if (!chk) {
          alert('개인정보 수집에 동의는 필수사항입니다.')
          return false
      }

      Axios.post('/user/auth/signup/', user,
          {
          headers : {
              "CSRF-TOKEN":csrftoken

          }
      }
      )
          .then(res => {
              if (res.data) {
                  alert(res.data.success)
                  window.location = '/login'
              } else {

                  setUsername('')
                  setEmail('')
                  setMbtiSelected('')
                  setPassword1('')
                  setPassword2('')
                  localStorage.clear()
                  alert("다시 시도해 주시기 바랍니다.")
              }
          })
          .catch(err => {
              var errCode = err.response.status;
              if(errCode==500){
                  setUsername('')
                  setEmail('')
                  setMbtiSelected('')
                  setPassword1('')
                  setPassword2('')
                  alert("다시 시도해 주시기 바랍니다.")
                  return
              }
              const errType = Object.keys(err.response.data)[0]
              let errMsg = err.response.data[errType]

              if (errType === "email") {
                  setEmail('')
                  document.getElementById(errType).focus();
              }
              else if(errType==="username"){
                  setUsername('')
                  document.getElementById(errType).focus();
              }
              else if (errType == "password") {
                  setPassword2('')
                  document.getElementById("password2").focus()
              }
              alert(errMsg)
          })
  }
  const newTabMbti=()=> {
      window.open("https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC");
  }
  const [passwordType1, setPasswordType1] = useState({
                                                type: 'password',
                                                visible: false});
  const [passwordType2, setPasswordType2] = useState({
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

  return(
      <div className="LoginSignupform">
          <div className="section text-center">
            <h4 className="mb-4 pb-3">SIGN UP</h4>
            {errors === true && <h2>Cannot signup with provided credentials</h2>}
              <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>

              <form onSubmit={onSubmit}>

                  <div className="form-group mt-2 selectMbtiDiv">
                  <select required="true" className="form-style selectMbti" onChange={onChangeMbti} value={selMbti}>
                      <option label="MBTI 선택" value=""></option>
                      {MbtiList.map((item) => (
                        <option style={{height: 10}} value={item} key={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                      <button onClick={newTabMbti} className="goMBTI">MBTI검사</button>
                      <i className="input-icon uil uil-heart"></i>


                  </div>

                  <div className="form-group mt-2">
                    <input type="username" name="username" className="form-style" placeholder="닉네임"
                           value={username} id="username" onChange={onChangeUsername} required autoComplete="off"/>
                      <i className="input-icon uil uil-user"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input type="email" name="email" className="form-style" placeholder="이메일" id="email"
                           value={email} onChange={onChangeEmail} required autoComplete="off"/>
                      <i className="input-icon uil uil-at"></i>
                  </div>

                  <div className="form-group mt-2">
                    <input type={passwordType1.type} name="password1" className="form-style" placeholder="비밀번호(소문자, 숫자 포함 8~16자)" id="password1"
                           value={password1} onChange={onChangePwd1} required autoComplete="off"
                           minLength='8'/>
                      <span className="icon-eye" onClick={handlePasswordType1}>
                                    {  passwordType1.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span>
                        <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input type={passwordType2.type} name="password2" className="form-style" placeholder="비밀번호 확인" id="password2"
                           value={password2} onChange={onChangePwd2} required autoComplete="off"
                           minLength='8'/>
                      <span className="icon-eye" onClick={handlePasswordType2}>
                                    {  passwordType2.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span>
                      <i className="input-icon uil uil-lock-alt"></i>
                  </div>

                   <React.Fragment>
                        <a onClick={ openModal }>개인정보 수집 동의  </a>
                       <input required className="checkbox2" type="checkbox" onClick={onChecked}/>
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
                  <button type='submit' className="btn mt-4">SIGNUP</button>
              </form>
          </div>
      </div>
  )

}

export default SignupPage;