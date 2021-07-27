import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Menu } from 'antd';
import styled from 'styled-components';

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

        Axios.post('/user/auth/logout/', token)
          .then(res => {
            localStorage.clear()
            // 사용하려면 App.js에서 /로 라우팅해야 한다
            window.location.replace('/')
          });
    }

    return(
        <div>
            <NavList>
                <Menu>
                    <Link to="/main">
                        메인 페이지
                    </Link>
                    { auth ?
                        <a onClick={handleLogout}>
                            로그아웃
                        </a>
                        :
                            <Link to="/login">
                                로그인
                            </Link>
                    }
                    { auth ?
                        <Link to="/mypage">
                            마이페이지
                        </Link>
                        :
                        <Link to="/signup">
                            회원가입
                        </Link>
                    }
                </Menu>
            </NavList>
        </div>
    )
}

export default NavBar;
