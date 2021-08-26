import React from 'react';
import MenuBar from "./NavBar/MenuBar";
import Axios from 'axios';
import {Link} from "react-router-dom";
import picYellow from "../img/pic_yellow.jpg";
import styled from "styled-components";

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
            <div>
                <MenuBar/>
                <header className="bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">
                        <h1 className="masthead-heading text-uppercase mb-0">MAIN PAGE</h1>
                    </div>
                </header>

                <div>
                    {/*<Link className="link" to="/Mbti_rcm">*/}
                    {/*    <button className="btn btn-primary btn-xl" id="submitButton" type="submit">MBTI별 추천</button>*/}
                    {/*</Link>*/}
                    {/*<Link className="link" to="/Personal_rcm">*/}
                    {/*    <button className="btn btn-primary btn-xl" id="submitButton" type="submit">개인별 추천</button>*/}
                    {/*</Link>*/}
                    {/*<input type="button" value="MBTI별 추천" onClick={this.onClick1}/>*/}
                    {/*<input type="button" value="개인별 추천" onClick={this.onClick2}/>*/}
                </div>
                <Img>
                <div className="sc-img">
                    {/*Item 1*/}
                    <div className="dv-rcm">
                        <img className="" src={picYellow} alt="..."/>
                            <Link className="link" to="/Mbti_rcm">
                                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">MBTI별 추천</button>
                            </Link>
                    </div>
                    {/*Item 2*/}
                    <div className="dv-rcm">
                        <img className="" src={picYellow} alt="..."/>
                        <Link className="link" to="/Personal_rcm">
                            <button className="btn btn-primary btn-xl" id="submitButton" type="submit">개인별 추천</button>
                        </Link>
                    </div>
                </div>
                </Img>
            </div>
        )
    }
}
export default Main;