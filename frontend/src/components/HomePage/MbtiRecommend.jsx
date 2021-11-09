import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
// import MbtiJobs from "./MbtiJobs";
import styled from "styled-components";
import pic1 from "../../img/pic01.jpg";
import pic2 from "../../img/pic02.jpg";
import pic3 from "../../img/pic03.jpg";
import pic4 from "../../img/pic04.jpg";
import pic5 from "../../img/pic05.jpg";

const Title = styled.div`
  h2{
    margin-top: 30px;
    
    color: #fff;
    padding: 30px;
  }
`;

const JobList = styled.div`
    li{
        list-style: none;
        padding: 10px 35px 10px 0px;
        font-size: 1.2rem;
    }
    ul {
    margin: 30px 0px;
    }
`;
class MbtiRecommend extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            mbti : this.props.mbti.toLocaleString().toLowerCase(),

            mbtiJobs:{
                infp : [ "일반음식점", "레스토랑", "패밀리레스토랑", "패스트푸드점", "치킨ㆍ피자전문점",],
                infj : [ "놀이공원테마파크", "호텔ㆍ리조트숙박", "여행ㆍ캠프레포츠", "영화ㆍ공연","전시ㆍ컨벤션ㆍ세미나"],
                intp : [ "백화점ㆍ면세점", "복합쇼핑몰아울렛", "쇼핑몰소셜커머스홈쇼핑", "대형마트", "편의점"],
                intj : [ "매장관리ㆍ판매", "MD", "캐셔ㆍ카운터", "서빙","주방장ㆍ조리사"],
                isfp : ["isfp"],
                isfj : ["isfj"],
                istp : ["istp"],
                istj : ["istj"],
                enfp : ["enfp"],
                enfj : ["enfj"],
                entp : ["entp"],
                entj : ["entj"],
                esfp : ["esfp"],
                esfj : ["esfj"],
                estp : ["estp"],
                estj : ["estj"],
            },

            myJobs:[],
        };
    }
    componentWillMount() {
        if(this.state.mbti === "intp"){
            this.state.myJobs = this.state.mbtiJobs.intp;
        }
        else if(this.state.mbti === "infp"){
            this.state.myJobs = this.state.mbtiJobs.infp;
        }
        else if(this.state.mbti === "infj"){
            this.state.myJobs = this.state.mbtiJobs.infj;
        }
        else if(this.state.mbti === "intj"){
            this.state.myJobs = this.state.mbtiJobs.intj;
        }
        else if(this.state.mbti === "isfp"){
            this.state.myJobs = this.state.mbtiJobs.isfp;
        }
        else if(this.state.mbti === "isfj"){
            this.state.myJobs = this.state.mbtiJobs.isfj;
        }
        else if(this.state.mbti === "istp"){
            this.state.myJobs = this.state.mbtiJobs.istp;
        }
        else if(this.state.mbti === "istj"){
            this.state.myJobs = this.state.mbtiJobs.istj;
        }
        else if(this.state.mbti === "entp"){
            this.state.myJobs = this.state.mbtiJobs.entp;
        }
        else if(this.state.mbti === "enfp"){
            this.state.myJobs = this.state.mbtiJobs.enfp;
        }
        else if(this.state.mbti === "enfj"){
            this.state.myJobs = this.state.mbtiJobs.enfj;
        }
        else if(this.state.mbti === "entj"){
            this.state.myJobs = this.state.mbtiJobs.entj;
        }
        else if(this.state.mbti === "esfp"){
            this.state.myJobs = this.state.mbtiJobs.esfp;
        }
        else if(this.state.mbti === "esfj"){
            this.state.myJobs = this.state.mbtiJobs.esfj;
        }
        else if(this.state.mbti === "estp"){
            this.state.myJobs = this.state.mbtiJobs.estp;
        }
        else if(this.state.mbti === "estj"){
            this.state.myJobs = this.state.mbtiJobs.estj;
        }
        console.log(this.state.myJobs)
    }

    render() {
        return (
        <div>

                <h2>{this.state.mbti.toLocaleString().toUpperCase()} 맞춤 알바</h2>

            <JobList>
                <ul>
                    {this.state.myJobs.map((job,index)=>
                        (<li>{job}</li>))
                    }
                </ul>
                <Link to="/login">
                    <input class="button_primary" type="button" value="더 추천받기!"/>
                </Link>
            </JobList>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        )
    }


}

export default MbtiRecommend;