import React ,{useState, useEffect} from 'react';
import Axios from 'axios';
import '../../css/mypage.css'
import {FaEye, FaEyeSlash} from "react-icons/fa";

function PasswordResetComplete(uid,token){
    const [password,setPassword] = useState('')

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onSubmitPassword=(e)=> {

        var checkpwd1 =/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        var checkpwd2 = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;


        if (!checkpwd1.test(password)&&!checkpwd2.test(password)) {
            alert("비밀번호를 확인해 주세요. 영소문자,숫자 포함 8~16자 (특수문자 가능) ")
            return
        }

        const data = {
            password : password,
            uid : uid.uid,
        }
        console.log(password)
        console.log(uid.uid)
        Axios.post('/user/password-reset-complete/',data)
            .then(res => {
                console.log(res);
                alert("비밀번호가 재설정되었습니다. 다시 로그인해주세요!")
                window.location.href='/login'
            })
            .catch(err => {
                console.log(err);
                console.log(err.data);
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
        <divc className="">
            <div className="Password-Reset-Complete Password-Change-modal">
                   <div className ="wrapper">
                       <p>새로운 비밀번호를 입력해주세요.</p>
                        <table  width ="100%">
                            <tr>
                                <td><input type={passwordType.type} className="password-input" id="password" value={password} onChange={onChangePassword}
                                        placeholder="새 비밀번호" />
                                <span className="icon-eye" onClick={handlePasswordType}>
                                    {  passwordType.visible ? <FaEyeSlash>숨기기</FaEyeSlash> : <FaEye>보이기</FaEye>  }</span>
                                <p>* 소문자, 숫자 포함 8~16자)</p>
                                </td>
                            </tr>
                        </table>
                       <div clsssName="button_box">
                           <button className="button_primary" type="button" onClick={onSubmitPassword} >재설정</button>
                       </div>
                   </div>


                {/*<p>새로운 비밀번호를 입력해주세요.</p>*/}
                {/*<input type="password" name="password1" className="form-style" placeholder="새 비밀번호(소문자, 숫자 포함 8~16자)" id="password"*/}
                {/*           value={password} onChange={onChangePassword} required autoComplete="off"*/}
                {/*           minLength='8' />*/}
                {/*<input type="button" value="재설정" onClick={onSubmitPassword}/>*/}

            </div>
        </divc>

    )
}

export default PasswordResetComplete;