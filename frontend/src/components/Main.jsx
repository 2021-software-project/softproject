import React from 'react';
import MenuBar from "./NavBar/MenuBar";
import Axios from 'axios';

class Main extends React.Component {

    onClick1(){
        window.location.replace('/Mbti_rcm');
    }
    onClick2(){
        window.location.replace('/Personal_rcm');
    }

    render() {
        return (
            <div>
                <MenuBar/>
                <div>
                    <span className="header">Main ; 웹 이름</span>
                </div>

                <br/>
                <br/>
                <br/>

                <div>
                    <input type="button" value="MBTI별 추천" onClick={this.onClick1}/>
                    <input type="button" value="개인별 추천" onClick={this.onClick2}/>
                </div>

            </div>
        )
    }
}
export default Main;