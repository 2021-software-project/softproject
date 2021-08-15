import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Axios from "axios";
import { Input } from 'antd';

function Albaratingresult(){
    const data = useLocation();
    console.log(data);

    const {ch_jobfamily} = useSelector(state=>state.job_modules);
    const {ch_job} = useSelector(state=>state.job_modules);
    const {ch_score} = useSelector(state=>state.job_modules);

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

    let token
    useEffect(() => {
        token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
            Axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
            }).then(res => {
                setUser(
                    res.data.username
                )
                setEmail(
                    res.data.email
                )
                console.log(res.data)
                console.log("user : " + user)
                console.log("email : " + email)
            });
        }
    }, [])


    const ratingSubmit = (e) => {
        e.preventDefault()


        const rating1 = {
            email: email,
            username : user,
            jobfamily : ch_jobfamily,
            job : ch_job,
            score : ch_score
        }
        console.log(rating1);

        token = localStorage.getItem('token')

        Axios.post("/user/userrating/", rating1,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            })
            .then(response=>{
                console.log(response)
                alert("평가 완료 !")
                window.location.replace('/Alba_rating')

            })
            .catch(function (err){

                console.log("token : ",token)
              //console.clear()
              console.log(err)
        })
  }


    return(

        <div>
            <h1>내가 매긴 평점</h1>
            <h2>내가 했었던 알바 업ㆍ직종 <br/> : {ch_jobfamily} => {ch_job}</h2>
            <h2>점수 : {ch_score}</h2>
            {user}  {email}

            <form onSubmit={ratingSubmit}>
                <Input type='submit' size="large" value='평가하기' />
            </form>

        </div>


    )

}
export default Albaratingresult;