import React, {Component} from 'react';
import {Link} from'react-router-dom';

import "../../css/home.css"
import "../../css/mypage.css"
import "../../css/input_mbti.css"
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

					<section id="banner">
						<div id="home_container-2">
						<div class="inner">
							<h2>Spectral</h2>
							<p>Another fine responsive<br />
							site template freebie<br />
							crafted by <a href="http://html5up.net">HTML5 UP</a>.</p>

							<ul class="actions special">
								<li><a href="/main" class="button primary">Activate</a></li>
							</ul>
						</div>
						</div>
						<a href="#one" class="more scrolly">Learn More</a>
					</section>

					<section id="one" className="wrapper style1 special"> b
						<div className="inner">

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
