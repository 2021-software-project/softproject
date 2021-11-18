import React, {Component, useRef} from 'react';
// import {Link} from'react-router-dom';
import {ArrowDownOutlined} from "@ant-design/icons";
import "../../css/home.css"
import "../../css/mypage.css"
import HomeMbti from "./HomeMbti";
import { Link } from "react-scroll"

class Home extends Component {

	//필요없으면 지우기
    state = {
        user : localStorage.getItem('user')
    }
    // RefExample = () => {
	// 	const scrollRef = useRef();
	// }
    // scrollDown = () =>{
	//
	// }

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
								<p>당신의 성격에 맞춰 알바를 추천해주는 </p>
								{/*<p>알바를 추천해주는</p>*/}
								<p>그런 앱 본 적 있나요?</p>

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
							<h1> 본인의 MBTI를 선택하십시오.</h1>
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