import React, {useEffect, useState} from 'react';
import "../../css/Job2.css";
import "../../css/Rcm.css"
import { useSelector, useDispatch } from 'react-redux';
import {changeJob} from "../../store/modules/job_modules";

function Job2(props){

    const dispatch = useDispatch();
    const {ch_jobfamily} = useSelector(state=>state.job_modules);
    const {ch_job} = useSelector(state=>state.job_modules);
    const {albaDetailArr, setAlbaDetail} = props;
    const Job1000 = [
        "일반음식점", "레스토랑", "패밀리레스토랑", "패스트푸드점", "치킨ㆍ피자전문점",
        "커피전문점", "아이스크림ㆍ디저트", "베이커리ㆍ도넛ㆍ떡", "호프ㆍ일반주점",
        "바(bar)", "급식ㆍ푸드시스템", "도시락ㆍ반찬",
    ];
    const Job2000 = [
        "백화점ㆍ면세점", "복합쇼핑몰ㆍ아울렛", "쇼핑몰ㆍ소셜커머스ㆍ홈쇼핑", "유통점ㆍ마트", "편의점",
        "의류ㆍ잡화매장", "뷰티ㆍ헬스스토어", "휴대폰ㆍ전자기기매장", "가구ㆍ침구ㆍ생활소품", "서점ㆍ문구ㆍ팬시",
        "약국", "농수산ㆍ청과ㆍ축산", "화훼ㆍ꽃집", "유통ㆍ판매 기타",
    ];
    const Job3000 = [
        "놀이공원ㆍ테마파크", "호텔ㆍ리조트ㆍ숙박", "여행ㆍ캠프ㆍ레포츠", "영화ㆍ공연", "전시ㆍ컨벤션ㆍ세미나",
        "스터디룸ㆍ독서실ㆍ고시원", "PC방", "노래방", "볼링ㆍ당구장", "스크린 골프ㆍ야구", "DVDㆍ멀티방ㆍ만화카페",
        "오락실ㆍ게임장", "이색테마카페", "키즈카페", "찜질방ㆍ사우나ㆍ스파", "피트니스ㆍ스포츠", "공인중개", "골프캐디",
        "고속도로휴게소", "문화ㆍ여가ㆍ생활 기타",
    ];
    const Job4000 = [
        "매장관리ㆍ판매", "MD", "캐셔ㆍ카운터", "서빙", "주방장ㆍ조리사","주방보조ㆍ설거지", "바리스타",
        "안내데스크", "주차관리ㆍ주차도우미", "보안ㆍ경비ㆍ경호", "주유ㆍ세차", "전단지배포", "청소ㆍ미화",
        "렌탈관리ㆍA/S", "헤어ㆍ미용ㆍ네일샵", "피부관리ㆍ마사지", "반려동물케어", "베이비시터ㆍ가사도우미",
        "결혼ㆍ연회ㆍ장례도우미", "판촉도우미", "이벤트ㆍ행사스텝", "나레이터모델", "피팅모델", "서비스 기타",
    ];
    const Job6000 = [
        "사무보조", "문서작성ㆍ자료조사", "비서", "경리ㆍ회계보조", "인사ㆍ총무", "마케팅ㆍ광고ㆍ홍보",
        "번역ㆍ통역", "복사ㆍ출력ㆍ제본", "편집ㆍ교정ㆍ교열", "공공기관ㆍ공기업ㆍ협회", "학교ㆍ도서관ㆍ교육기관",
    ];
    const Job7000 = [
        "고객상담ㆍ인바운드", "텔레마케팅ㆍ아웃바운드", "금융ㆍ보험영업", "일반영업ㆍ판매", "설문조사ㆍ리서치", "영업관리ㆍ지원",
    ];
    const Job8000 = [
       "제조ㆍ가공ㆍ조립", "포장ㆍ품질검사", "입출고ㆍ창고관리", "상하차ㆍ소화물 분류", "기계ㆍ전자ㆍ전기", "정비ㆍ수리ㆍ설치ㆍA/S",
        "공사ㆍ건설현장", "PVC(닥트ㆍ배관설치)", "조선소", "재단ㆍ재봉", "생산ㆍ건설ㆍ노무 기타",
    ];
    const Job9000 = [
      "웹ㆍ모바일기획", "사이트ㆍ콘텐츠 운영", "바이럴ㆍSNS마케팅", "프로그래머", "HTML코딩", "QAㆍ테스터ㆍ검증",
        "시스템ㆍ네트워크ㆍ보안", "PCㆍ디지털기기 설치ㆍ관리",
    ];
    const JobA000 = [
       "입시ㆍ보습학원", "외국어ㆍ어학원", "컴퓨터ㆍ정보통신", "요가ㆍ필라테스 강사", "피트니스 트레이너", "레져스포츠 강사",
        "예체능 강사", "유아ㆍ유치원", "방문ㆍ학습지", "보조교사", "자격증ㆍ기술학원", "국비교육기관", "교육ㆍ강사 기타",
    ];
    const JobB000= [
       "웹ㆍ모바일디자인", "그래픽ㆍ편집디자인", "제품ㆍ산업디자인", "CADㆍCAMㆍ인테리어디자인", "캐릭터ㆍ애니메이션디자인", "패션ㆍ잡화디자인",
        "디자인 기타",
    ];
    const JobC000 = [
        "미디어 전체", "보조출연ㆍ방청", "방송스텝ㆍ촬영보조", "동영상촬영ㆍ편집", "사진촬영ㆍ편집", "조명ㆍ음향", "방송사ㆍ프로덕션", "신문ㆍ잡지ㆍ출판",
        "미디어 기타",
    ];
    const JobD000 = [
       "운반ㆍ이사", "대리운전ㆍ일반운전", "택시ㆍ버스운전", "수행기사", "화물ㆍ중장비ㆍ특수차", "택배ㆍ퀵서비스", "배달",

    ];
    const JobE000 = [
       "병원ㆍ간호ㆍ연구 전체", "간호조무사ㆍ간호사", "간병ㆍ요양보호사", "원무ㆍ코디네이터", "외래보조ㆍ병동보조",
        "수의테크니션ㆍ동물보건사", "실험ㆍ연구보조", "생동성ㆍ임상실험",
    ];


    const onChangeJob = (ch_jobfamily, ch_job, index) => {
        dispatch(changeJob(ch_jobfamily, ch_job));
        setAlbaDetail(
            albaDetailArr.map((a, i)=>
                i===index ? true : false)
        )
    }
    console.log(ch_jobfamily, ch_job);

    if (props.job_value === "유통ㆍ판매") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job2000.map((job, index) =>
                        (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('유통ㆍ판매',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "문화ㆍ여가ㆍ생활") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job3000.map((job, index) =>
                        (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('문화ㆍ여가ㆍ생활',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "서비스") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job4000.map((job, index) =>
                        (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('서비스',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "사무직") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job6000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('사무직',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "고객상담ㆍ리서치ㆍ영업") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job7000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('고객상담ㆍ리서치ㆍ영업',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "생산ㆍ건설ㆍ운송") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job8000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('생산ㆍ건설ㆍ운송',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "ITㆍ컴퓨터") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job9000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('ITㆍ컴퓨터',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "교육ㆍ강사") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobA000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('교육ㆍ강사',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "디자인") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobB000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('디자인',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "미디어") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobC000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('미디어',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "운전ㆍ배달") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobD000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('운전ㆍ배달',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "병원ㆍ간호ㆍ연구") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobE000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('병원ㆍ간호ㆍ연구',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    }  else {
        return (
            <div className="jobSelect">
                <ul>
                    {Job1000.map((job, index) =>
                         (<li><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('외식ㆍ음료',job, index)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    }



}

export default Job2;