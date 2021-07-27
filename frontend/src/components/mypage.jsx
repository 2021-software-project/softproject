import React, {useEffect, useState} from 'react';
import Axios from "axios";

function MyPage(){

    const [user, setUser] = useState('')

    useEffect(() => {
        let token =  localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
           Axios({
               method: 'get',
               url: '/user/auth/user/',
               headers: {'Authorization': 'token '+token, 'Content-Type': 'application/json'}
           }).then(res => {
                   setUser(
                       res.data.username
                   )
                   console.log(res.data)
               });
        }
        console.log("user : "+user)

    }, [])
    return(
        <div>
            <span>{user}</span>
        </div>
    )
}
export default MyPage;