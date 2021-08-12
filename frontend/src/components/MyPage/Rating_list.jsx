import React, {useEffect, useState} from 'react';
import Mypage from "../mypage";
import axios from 'axios';

function Rating(){

    const [useremail, setEmail] = useState('')
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
                console.log("email : " + useremail)
            });
        }
    }, [])



    let token = localStorage.getItem('token')
    let ratinglist
    //userRating 데이터베이스에 접근
    axios.get('/user/userrating/',
        {params : {email : useremail}},
        {
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
        })
      .then((Response)=>{
          ratinglist = Response.data
          console.log(Response.data)})
      .catch((Error)=>{console.log(Error)})

    return(
        <div>
            <h2>Rating List</h2>
            {ratinglist}
        </div>
    )
}

export default Rating