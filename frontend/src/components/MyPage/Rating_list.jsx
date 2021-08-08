import React, {useEffect, useState} from 'react';
import Mypage from "../mypage";
import axios from 'axios';

function Rating(){

    const [email, setEmail] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
            axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
            }).then(res => {
                setEmail(
                    res.data.email
                )
                console.log(res.data)
                console.log("email : " + email)
            });
        }
    }, [])

    //userRating 데이터베이스에 접근
    axios.get('http://localhost:8000/user/userrating/',
        {params : {email : email}})
      .then((Response)=>{console.log(Response.data)})
      .catch((Error)=>{console.log(Error)})

    return(
       <h2>Rating List</h2>
    )
}

export default Rating