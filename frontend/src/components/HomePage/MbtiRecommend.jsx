import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import "../../css/MbtiRecommend.css";

const Title = styled.div`
  h2{
    margin-top: 30px;
    
    color: #fff;
    padding: 30px;
  }
`;
class MbtiRecommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: localStorage.getItem("token"),
            mbti: this.props.mbti.toLocaleString().toLowerCase(),
            mbtiJobs: {
                enfj: ['생동성 임상시험', '의류 잡화 쥬얼리매장', '매장관리 판매', '오락실 게임장', '컴퓨터 정보통신'],
                enfp: ['매장관리 판매 기타', '실험 연구보조', '매장관리 판매', '의류 잡화 쥬얼리매장', '오락실 게임장'],
                entj: ['문서작성 자료조사', '컴퓨터 정보통신', '포장 품질검사', '미디어 기타', '학교 도서관 교육기관'],
                entp: ['컴퓨터 정보통신', '영화관 공연장', 'PC 디지털기기 설치관리', '공인중개', '고객상담 인바운드'],
                esfj: ['스터디룸 독서실 고시원', 'DVD 멀티방 만화카페', '정비 수리 설치 A/S', '생동성 임상시험', '키즈카페'],
                esfp: ['미디어 기타', 'PC방', '서비스 기타', '영화관 공연장', '반려동물케어'],
                estj: ['학교 도서관 교육기관', '반려동물케어', '실험 연구보조', '유통점 마트', '경리 회계보조'],
                estp: ['베이커리 도넛 떡', '오락실 게임장', 'PC방', '서비스 기타', '미디어 기타'],
                infj: ['택시 대리 수행기사', '화물 중장비 특수차', '미디어 기타', '키즈카페', '택시 버스운전'],
                infp: ['신문 잡지 출판', '영화관 공연장', '동영상촬영 편집', '유아 유치원', '버스 셔틀운전'],
                intj: ['실험 연구보조', '컴퓨터 정보통신', 'PC 디지털기기 설치 관리', '정비 수리 설치 A/S', '공인중개'],
                intp: ['학교 도서관 교육기관', '반려동물케어', '서비스 기타', '전기 칸막이 배관공사', '컴퓨터 정보통신'],
                isfj: ['DVD 멀티방 만화카페', '정비 수리 설치 A/S', '오락실 게임장', '간병 요양보호사', '간호조무사 간호사'],
                isfp: ['영화관 공연장', '그래픽 영상 편집디자인', '택시 대리 수행기사', '미디어 기타', '생동성 임상시험'],
                istj: ['포장 품질검사', '실험 연구보조', '예체능 강사', '수의테크니션 동물보건사', '입시 보습학원'],
                istp: ['실험 연구보조', '경리 회계보조', '금융 보험영업', '컴퓨터 정보통신', '전시 컨벤션 세미나'],
            },
            myJobs: [],
        };
    }
    componentWillMount() {
        if (this.state.mbti === "intp") {
            this.state.myJobs = this.state.mbtiJobs.intp;
        } else if (this.state.mbti === "infp") {
            this.state.myJobs = this.state.mbtiJobs.infp;
        } else if (this.state.mbti === "infj") {
            this.state.myJobs = this.state.mbtiJobs.infj;
        } else if (this.state.mbti === "intj") {
            this.state.myJobs = this.state.mbtiJobs.intj;
        } else if (this.state.mbti === "isfp") {
            this.state.myJobs = this.state.mbtiJobs.isfp;
        } else if (this.state.mbti === "isfj") {
            this.state.myJobs = this.state.mbtiJobs.isfj;
        } else if (this.state.mbti === "istp") {
            this.state.myJobs = this.state.mbtiJobs.istp;
        } else if (this.state.mbti === "istj") {
            this.state.myJobs = this.state.mbtiJobs.istj;
        } else if (this.state.mbti === "entp") {
            this.state.myJobs = this.state.mbtiJobs.entp;
        } else if (this.state.mbti === "enfp") {
            this.state.myJobs = this.state.mbtiJobs.enfp;
        } else if (this.state.mbti === "enfj") {
            this.state.myJobs = this.state.mbtiJobs.enfj;
        } else if (this.state.mbti === "entj") {
            this.state.myJobs = this.state.mbtiJobs.entj;
        } else if (this.state.mbti === "esfp") {
            this.state.myJobs = this.state.mbtiJobs.esfp;
        } else if (this.state.mbti === "esfj") {
            this.state.myJobs = this.state.mbtiJobs.esfj;
        } else if (this.state.mbti === "estp") {
            this.state.myJobs = this.state.mbtiJobs.estp;
        } else if (this.state.mbti === "estj") {
            this.state.myJobs = this.state.mbtiJobs.estj;
        }
    }
    render() {
        return (
            <div className="recommend_conDiv">
                <font2>" {this.state.mbti.toLocaleString().toUpperCase()} "</font2>
                &nbsp; &nbsp;
                <font3>맞춤 알바</font3>
                <div className="recommend_con">
                    <div className="rcm-grid-thead">
                        {this.state.myJobs.map((job, index) =>
                            (<div className="recommend_job">
                                <div className="textbox">{job}</div>
                            </div>))
                        }
                    </div>
                </div>
                {this.state.auth ?

                    ""

                    :
                    <div className="recommend_con4">
                        <font4>당신의 성향에 맞춰 더 자세한 추천을 원한다면</font4>
                    </div>
                }
                {this.state.auth ?
                    <a href="/Mbti_rcm">
                        <button className="button_primary" type="button">더 많은 공고 보러 가기</button>
                    </a> :
                    <a href="/login">
                        <button className="button_primary" type="button">알바그램 회원하러 가기</button>
                    </a>
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