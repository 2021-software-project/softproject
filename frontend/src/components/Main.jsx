import React from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import "../css/home.css";
import "../css/mypage.css";
import "../css/Main.css"


class Main extends React.Component {

    state = {
        username : localStorage.getItem("username")
    }

    render() {
        return (
            <div className="Main">
                <div className ="home_container">

                <div className="main-section">
                    <section
                        className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
                        id="first">
                        <div className="content">
                            <Link className="link" to="/Mbti_rcm">
                                <h2>내 MBTI 맞춤 알바</h2>
                                <p>MBTI를 기반의 아르바이트를 추천해드립니다.</p>
                            </Link>
                        </div>
                        <div className="image">
                            <Link className="link" to="/Mbti_rcm">
                                <button className="button primary" id="submitButton" type="submit">MBTI별 추천</button>
                            </Link>
                        </div>
                    </section>


                    <section
                        className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                        <div className="content">
                            <Link className="link" to="/Personal_rcm">
                                <h2>{this.state.username}님 위한 맞춤 알바</h2>
                                <p>선호하는 알바를 파악하여 추천해 드립니다.</p>
                            </Link>
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