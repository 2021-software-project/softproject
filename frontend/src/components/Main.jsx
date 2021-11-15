import React from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import UserName from "./MyPage/UserName.jsx"
import "../css/home.css";
import "../css/mypage.css";
import "../css/Main.css"

// const Img=styled.div`
// .sc-img {
//     max-width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly
//     margin-top:20px;
// }
// .dv-rcm{
//     position: relative;
// }
// img {
//     width: 100%;
//     height: auto;
//     object-fit: cover;
//     opacity: 0.7;
//     margin-bottom:20px
// }
// a.link {
//     color: inherit;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     position: absolute;
// }
// button{
//     background-color: #1a1e216e!important;
//     border-color: #ffffff00!important;
//     padding: 7px;
//     font-size: 1.2rem;
// }
// `

class Main extends React.Component {

    // onClick1(){
    //     window.location.replace('/Mbti_rcm');
    // }
    // onClick2(){
    //     window.location.replace('/Personal_rcm');
    // }

    render() {
        return (
            <div className="Main">
                <div className ="home_container">
                    {/*<header>*/}
                    {/*    <div className ="home_container-2">*/}
                    {/*        <h1 className="header">MAIN PAGE</h1>*/}
                    {/*    </div>*/}
                    {/*</header>*/}

                {/* <!-- Two --> */}
                <div className="main-section">
                    <section
                        className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
                        id="first">
                        <div className="content">
                            <h2>내 MBTI 맞춤 알바</h2>
                            <p>MBTI를 기반의 아르바이트를 추천해드립니다.</p>
                        </div>
                        <div className="image">
                            <Link className="link" to="/Mbti_rcm">
                                <button className="button primary" id="submitButton" type="submit">MBTI별 추천</button>
                            </Link>
                        </div>
                    </section>

                    {/* <!-- Three -->*/}
                    <section
                        className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                        <div className="content">
                            <h2><UserName />님 위한 맞춤 알바</h2>
                            <p>선호하는 알바를 파악하여 추천해 드립니다.</p>
                        </div>
                        <div className="image">
                            <Link className="link" to="/Personal_rcm">
                                <button className="button primary" id="submitButton" type="submit">개인별 추천</button>
                            </Link>
                        </div>
                    </section>
                </div>





                </div>
            </div>
        )
    }
}
export default Main;