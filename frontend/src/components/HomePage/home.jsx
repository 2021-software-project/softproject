import React, {Component} from 'react';
import {Link} from'react-router-dom';

import "../../css/home.css"
import "../../css/mypage.css"
import HomeMbti from "./HomeMbti";

class Home extends Component {

    state = {
        user : localStorage.getItem('user')
    }

    render(){
        return(
            <div>
                <header className="home_container" >
					<section id="banner">
						<div id="home_container-2">
						<div id="inner">
							<font >
								Albagram
							</font>
							<div id="innerEntry">
							<p>당신의 성격에 맞춰<br />
							알바를 추천해주는<br />
							그런 앱 본 적 있나요?<br />
							</p>
								<a href="/main" className="button_primary">입장하기</a>
								</div>
						</div>
						</div>
						<div id= "innerExpe">
						<a href="#one" class="more scrolly">체험하기</a>
						</div>
					</section>

					<section id="one" className="wrapper style1 special">
						<div id="inner2">
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