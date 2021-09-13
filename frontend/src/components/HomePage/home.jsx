import React, {Component} from 'react';
import {Link} from'react-router-dom';

import "../../css/home.css"
import "../../css/mypage.css"
import pic1 from '../../img/pic01.jpg'
import pic2 from "../../img/pic02.jpg";
import picYellow from"../../img/pic_yellow.jpg"


class Home extends Component {

    state = {
        user : localStorage.getItem('user')
    }

    render(){
        return(

            <div>
                <header className="home_container" >
                    <div id="home_container-2">
                        <div className="container d-flex align-items-center flex-column" >
                            <h1 className="masthead-heading text-uppercase mb-0">HOME PAGE</h1>
                        </div>
                    </div>

                    <div className= "container">
                        <div id="home_container-3">
                        <Link className="link" to="/input_mbti">
                            <button className="btn btn-primary btn-xl" id="submitButton" type="submit">체험하기</button>
                        </Link>

                        <Link className="link" to="/main">
                        <button className="btn btn-primary btn-xl" id="submitButton" type="submit">입장하기</button>
                        </Link>
                        </div>
                    </div>

                </header>





            </div>
        )
    }
}

export default Home
