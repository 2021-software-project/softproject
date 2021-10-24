import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Menu } from 'antd';
import "../../css/navBar_footer.css";
import MenuOutlined from  '@ant-design/icons';
import "../../js/scripts.js"


function MenuBar(){
    return(
        <div id="menubar">
            {/*<div className="container">*/}
                    {/*<button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-black-50"*/}
                    {/*        type="button" data-bs-toggle="collapse" data-bs-target="#menuitem"*/}
                    {/*        aria-controls="menuitem" aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*    =*/}
                    {/*</button>*/}
                    <div className="collapse navbar-collapse " id="menuitem">
                        <ul className="menubarUL">
                            <li className="menuLI"><a className="menuLI-A"
                                                                     href="/Mbti_rcm">MBTI별 추천</a></li>
                            <li className="menuLI "><a className="menuLI-A"
                                                                     href="/Personal_rcm">개인별 추천</a></li>
                            <li className="menuLI"><a className="menuLI-A"
                                                                     href="/Alba_rating">알바평가</a></li>
                        </ul>
                    </div>
            {/*</div>*/}
        </div>
    )
}


function NavBar() {

    const [auth, setAuth] = useState('')

    const user = auth.user;

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true);
        }
    }, [])

    const handleLogout = () => {
        let token = localStorage.getItem('token')

        Axios({
            url: "http://localhost:8000/user/auth/logout/",
            method: 'post',
            headers: {
               'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
        })
          .then(res => {

            localStorage.clear()
            // 사용하려면 App.js에서 /로 라우팅해야 한다
            window.location.replace('/')
          });
    }
    const onClink=(e)=>{

    }
    return(
        <div>
        <div id="page-top">
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-black-50"
                            type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <MenuOutlined />
                        <i className="fas fa-bars"></i>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/main">Main Page</a></li>
                            { auth ?
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     onClick={handleLogout} href="#logout">Logout</a></li>
                                :
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/login">Login / Sign up</a></li>
                            }

                            { auth ?
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/mypage">MyPage</a></li>
                                : " "
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            { auth ? <MenuBar /> : "" }
</div>
    )

}

export default NavBar;