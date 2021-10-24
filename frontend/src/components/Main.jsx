import React from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import picYellow from "../img/pic_yellow.jpg";
import styled from "styled-components";
import "../css/home.css";
import "../css/mypage.css";
import "../css/base.css";


const Img=styled.div`
.sc-img {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly
    margin-top:20px;
}
.dv-rcm{
    position: relative;
}
img {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 0.7;
    margin-bottom:20px
}
a.link {
    color: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
}
button{
    background-color: #1a1e216e!important;
    border-color: #ffffff00!important;
    padding: 7px;
    font-size: 1.2rem;
}
`

class Main extends React.Component {

    // onClick1(){
    //     window.location.replace('/Mbti_rcm');
    // }
    // onClick2(){
    //     window.location.replace('/Personal_rcm');
    // }

    render() {
        return (
            <div className =" home_container ">

                <header>
                    <div className ="home_container-2">

                        <h1 className="masthead-heading text-uppercase mb-0">MAIN PAGE</h1>
                    </div>
                </header>

                <div>

                </div>

                <div id="home_container-2">
                    <div id = "container_home_button">
                    {/*Item 1*/}

                        <div id="box-left" >
                            <Link className="link" to="/Mbti_rcm">
                                <button className="button primary" id="submitButton" type="submit">MBTI별 추천</button>
                            </Link>
                        </div>

                    {/*Item 2*/}
                        <div id ="box-right"  >
                        <Link className="link" to="/Personal_rcm">
                            <button className="button primary" id="submitButton" type="submit">개인별 추천</button>
                        </Link>
                            </div>


                    </div>
                    </div>

            </div>
        )
    }
}
export default Main;