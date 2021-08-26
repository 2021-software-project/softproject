import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Menu } from 'antd';
import styled from 'styled-components';
import "../../css/styles.css";
import "../../js/scripts";

const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .ant-menu {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

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

        Axios.post('http://127.0.0.1:8000/user/auth/logout/', token)
          .then(res => {
            localStorage.clear()
            // 사용하려면 App.js에서 /로 라우팅해야 한다
            window.location.replace('/')
          });
    }
    const onClink=(e)=>{

    }
    return(
        <div id="page-top">

            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                            type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/main">메인 페이지</a></li>
                            { auth ?
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     onClick={handleLogout} href="#logout">로그아웃</a></li>
                                :
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/login">로그인</a></li>
                            }

                            { auth ?
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/mypage">마이페이지</a></li>
                                :
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                     href="/signup">회원가입</a></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <a className="navbar-brand" href="#">Fixed navbar</a>*/}
            {/*        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"*/}
            {/*                aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon"></span>*/}
            {/*        </button>*/}
            {/*        <div className="collapse navbar-collapse" id="navbarCollapse">*/}
            {/*            <ul className="navbar-nav me-auto mb-2 mb-md-0">*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a className="nav-link" href="#">Link</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a className="nav-link disabled" href="#" tabIndex="-1"*/}
            {/*                       aria-disabled="true">Disabled</a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        </div>

    )

    // return(
    //     <div>
    //         <NavList>
    //             <Menu>
    //                 <Link to="/main">
    //                     메인 페이지
    //                 </Link>
    //                 { auth ?
    //                     <a onClick={handleLogout}>
    //                         로그아웃
    //                     </a>
    //                     :
    //                         <button>
    //                             <Link to="/login">
    //                                 로그인
    //                             </Link>
    //                         </button>
    //                 }
    //                 { auth ?
    //                     <Link to="/mypage">
    //                         마이페이지
    //                     </Link>
    //                     :
    //                     <Link to="/signup">
    //                         회원가입
    //                     </Link>
    //                 }
    //
    //             </Menu>
    //         </NavList>
    //     </div>
    // )
}

export default NavBar;