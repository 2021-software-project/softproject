import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import "../../css/MbtiRecommend.css";


const Title = styled.div`
  h2{
    margin-top: 30px;
    
    color: #fff;
    padding: 30px;
  }
`;

/*const JobList = styled.div`
    li{
        list-style: none;
        padding: 10px 35px 10px 0px;
        font-size: 1.2rem;
    }
    ul {
    margin: 30px 0px;
    }
`;*/

class MbtiRecommend extends React.Component{


    constructor(props) {



        super(props);

        this.state = {

            auth : localStorage.getItem("token"),
            mbti : this.props.mbti.toLocaleString().toLowerCase(),

            mbtiJobs:{
                enfj : ['생동성ㆍ임상시험' , '의류ㆍ잡화ㆍ쥬얼리매장', '매장관리ㆍ판매', '오락실ㆍ게임장', '컴퓨터ㆍ정보통신'],
                enfp : ['매장관리ㆍ판매 기타',	'실험ㆍ연구보조', '매장관리ㆍ판매', '의류ㆍ잡화ㆍ쥬얼리매장', '오락실ㆍ게임장'],
                entj : ['문서작성ㆍ자료조사','컴퓨터ㆍ정보통신', '포장ㆍ품질검사', '미디어 기타', '학교ㆍ도서관ㆍ교육기관'],
                entp : ['컴퓨터ㆍ정보통신', '영화관ㆍ공연장', 'PCㆍ디지털기기 설치ㆍ관리', '공인중개', '고객상담ㆍ인바운드'],
                esfj : ['스터디룸ㆍ독서실ㆍ고시원', 'DVDㆍ멀티방ㆍ만화카페', '정비ㆍ수리ㆍ설치ㆍA/S', '생동성ㆍ임상시험', '키즈카페'],
                esfp : ['미디어 기타', 'PC방', '서비스 기타', '영화관ㆍ공연장', '반려동물케어'],
                estj : ['학교ㆍ도서관ㆍ교육기관', '반려동물케어', '실험ㆍ연구보조', '유통점ㆍ마트', '경리ㆍ회계보조'],
                estp : ['베이커리ㆍ도넛ㆍ떡', '오락실ㆍ게임장', 'PC방', '서비스 기타', '미디어 기타'],
                infj : ['택시ㆍ대리ㆍ수행기사', '화물ㆍ중장비ㆍ특수차', '미디어 기타', '키즈카페', '택시ㆍ버스운전'],
                infp : ['신문ㆍ잡지ㆍ출판', '영화관ㆍ공연장', '동영상촬영ㆍ편집', '유아ㆍ유치원', '버스ㆍ셔틀운전'],
                intj : ['실험ㆍ연구보조', '컴퓨터ㆍ정보통신', 'PCㆍ디지털기기 설치ㆍ관리', '정비ㆍ수리ㆍ설치ㆍA/S', '공인중개'],
                intp : ['학교ㆍ도서관ㆍ교육기관', '반려동물케어', '서비스 기타', '전기ㆍ칸막이ㆍ배관공사', '컴퓨터ㆍ정보통신'],
                isfj : ['DVDㆍ멀티방ㆍ만화카페', '정비ㆍ수리ㆍ설치ㆍA/S', '오락실ㆍ게임장', '간병ㆍ요양보호사', '간호조무사ㆍ간호사'],
                isfp : ['영화관ㆍ공연장', '그래픽ㆍ영상ㆍ편집디자인', '택시ㆍ대리ㆍ수행기사', '미디어 기타', '생동성ㆍ임상시험'],
                istj : ['포장ㆍ품질검사', '실험ㆍ연구보조', '예체능 강사', '수의테크니션ㆍ동물보건사', '입시ㆍ보습학원'],
                istp : ['실험ㆍ연구보조', '경리ㆍ회계보조', '금융ㆍ보험영업', '컴퓨터ㆍ정보통신', '전시ㆍ컨벤션ㆍ세미나'],
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
        <div className="recommend_conDiv">

            <font2>{this.state.mbti.toLocaleString().toUpperCase()}</font2> &nbsp; &nbsp; <font3>맞춤 알바</font3>

            <div className="recommend_con">


                  <div className="rcm-grid-thead">

                      {this.state.myJobs.map((job, index) =>
                          (<div className="recommend_job">
                              <div className="inner">
                                  {job}
                              </div>
                          </div>))
                      }
                  </div>
            </div>

            {this.state.auth?
                <a href="/Mbti_rcm">
                        <input className="button_primary" type="button" value="더 많은 공고 보러 가기"/>
                    </a> :
                <a href="/login">
                    <input className="button_primary" type="button" value="알바그램 회원하러 가기"/>
                </a>

                }

                 {this.state.auth?

                  ""

                   :

                       <div className="recommend_con2">당신의 성향에 맞춰 더 자세한 추천을 원한다면</div>
                }






            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        )
    }


}

export default MbtiRecommend;