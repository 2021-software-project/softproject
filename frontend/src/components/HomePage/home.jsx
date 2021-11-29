import React, {Component, useRef} from 'react';
// import {Link} from'react-router-dom';
import {ArrowDownOutlined} from "@ant-design/icons";
import "../../css/home.css"
import "../../css/mypage.css"
import HomeMbti from "./HomeMbti";
import { Link } from "react-scroll"

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
							<a href="/main">
							<font>
								Albagram
							</font>
							</a>
							<div id="innerEntry">
								<p>쏟아지는 알바공고에 헤메고 있나요?</p>

								<p>알바그램이 찾아드릴게요 </p>
								<p>당신의 ALBA</p>

								<a href="/main" className="button_primary">입장하기</a>
								</div>
						</div>
						</div>
						<div id= "innerExpe">
							 <Link to="one" spy={true} smooth={true}>
							<div className="clickExpeDiv"><ArrowDownOutlined className="clickExpe" onClick={this.scrollDown}/></div>
							 <span>체험하기</span>
							 </Link>
						</div>
					</section>

					<section id="one" className="wrapper style1 special">
						<div id="inner2">
							<div className="checkMBTI">
							<p></p>
							<p></p>
							<h1> 당신의&nbsp; <font2>MBTI</font2> 는 무엇인가요?</h1>
							<p></p>
							<p></p>

						<HomeMbti />
								</div>
						</div>
					</section>
                </header>
            </div>
        )
    }
}

export default Home