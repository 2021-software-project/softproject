import React ,{useState, useEffect} from 'react';
import Axios from 'axios';

function PasswordResetComplete(uid,token){
    const [password,setPassword] = useState('')

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onSubmitPassword=(e)=> {
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
    return(
        <div>
            <p>새로운 비밀번호를 입력해주세요.</p>
            <input type="password" name="password1" className="form-style" placeholder="Your Password(소문자, 숫자, 특수문자 포함 8~16자)" id="password"
                           value={password} onChange={onChangePassword} required autoComplete="off"
                           minLength='8' pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[a-z\d$@$!%*#?&^]{8,16}$' />
            <input type="button" value="재설정" onClick={onSubmitPassword}/>
        </div>
    )
}

export default PasswordResetComplete;