import React, {Component} from 'react';
import {Link} from'react-router-dom';

import "../../css/home.css"
import "../../css/mypage.css"
import pic1 from '../../img/pic01.jpg'
import pic2 from "../../img/pic02.jpg";
import picYellow from"../../img/pic_yellow.jpg"
import HomeMbti from "./HomeMbti";


class Home extends Component {

    state = {
        user : localStorage.getItem('user')
    }

    render(){
        return(

            <div>
                <header className="home_container" >

					<section className="banner">
						<div id="home_container-2">
						<div id="inner">
							<h1>Spectral</h1>
							<p>당신의 성격에 맞춰<br />
							알바를 추천해주는<br />
							그런 앱 본 적 있나요?<br />
								<a href="http://html5up.net">HTML5 UP</a>.</p>

								<div id="inner">
								<a href="/main" className="button_primary">입장하기</a>
								</div>

						</div>
						</div>
						<a href="#one" class="more scrolly">체험하기</a>
					</section>

					<section id="one" className="wrapper style1 special">
						<div id="inner">

							<p></p>
							<p></p>
							<h1> 본인의 MBTI를 선택하십시오.</h1>
							<p></p>
							<p></p>
						<HomeMbti />
						</div>
					</section>
                </header>
            </div>
        )
    }
}

export default Home