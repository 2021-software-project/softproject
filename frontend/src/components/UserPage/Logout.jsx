import React ,{useEffect} from 'react'
import Axios from 'axios'

export function Logout() {

    let token = localStorage.getItem('token')



    Axios({
        url: process.env.REACT_APP_DB_HOST +"/user/logout/",
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
    })
        .then(res => {
            localStorage.clear();
            window.location.replace('/login');
        })
        .catch(err => {
            var errCode = err.response.status
            // alert(err.response)
            if (errCode == 401) {
                localStorage.clear();
                window.location.replace('/login');
            } else {
                window.location.replace('/error');
            }
        });
}
export default {Logout};