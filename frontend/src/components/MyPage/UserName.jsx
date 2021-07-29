import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

function UserName(){
     const [user, setUser] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
            Axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
            }).then(res => {
                setUser(
                    res.data.username
                )
                console.log(res.data)
            });
        }
        console.log("user : " + user)

    }, [])
    return (<div style={{display:"inline"}}>{user}</div>)
}

export default UserName