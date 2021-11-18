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
                            <li className="menuLI"><a className="menuLI-A"
                                                                     href="/information">개발자 정보</a></li>
                        </ul>
                    </div>
            {/*</div>*/}
        </div>
    )
}


function NavBar() {

    const [auth, setAuth] = useState('')

    const user = auth.user;
    const [path, setPath] = useState('')

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true);
        }
        setPath(window.location.pathname)
    }, [])

    const handleLogout = () => {
        let token = localStorage.getItem('token')
        console.log("로그아웃")
        Axios({
            url: "/user/logout/",
            method: 'post',
            headers: {
               'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
        })
          .then(res => {
            localStorage.clear()
            window.location.replace('/login')
          })
            .catch(err=>{
                console.log(err)
                console.log(err.data)
            });
    }
    const onClink=(e)=>{

    }
    return(
        <div>
    {path==='/' ? '' :
        <div>
        <div id="page-top">
            <nav className={`navbar navbar-expand-lg bg-secondary text-uppercase ${path==='/'?'noNav':''}`} id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/main">Albagram</a>
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
                                                                     href="/main">MAIN PAGE</a></li>
                            { auth ?
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     onClick={handleLogout} href="#logout">LOGOUT</a></li>
                                :
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/login">LOGIN / SIGN UP</a></li>
                            }

                            { auth ?
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/mypage">MYPAGE</a></li>
                                : " "
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            { auth ? <MenuBar /> : "" }
    </div>}
</div>
    )

}

export default NavBar;