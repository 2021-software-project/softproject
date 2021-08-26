import React from 'react';
import "../../css/Job2.css";
import { useSelector, useDispatch } from 'react-redux';
import {changeJob} from "../../store/modules/job_modules";

function Job2(props){

    const dispatch = useDispatch();
    const {ch_jobfamily} = useSelector(state=>state.job_modules);
    const {ch_job} = useSelector(state=>state.job_modules);

    const onChangeJob = (ch_jobfamily, ch_job) => dispatch(changeJob(ch_jobfamily, ch_job));

    const Job1000 = [
        "일반음식점", "레스토랑", "패밀리레스토랑", "패스트푸드점", "치킨ㆍ피자전문점",
        "커피전문점", "아이스크림ㆍ디저트", "베이커리ㆍ도넛ㆍ떡", "호프ㆍ일반주점",
        "바(bar)", "급식ㆍ푸드시스템", "도시락ㆍ반찬",
    ];
    const Job2000 = [
        "백화점ㆍ면세점", "복합쇼핑몰아울렛", "쇼핑몰소셜커머스홈쇼핑", "대형마트", "편의점",
        "의류잡화매장", "뷰티ㆍ헬스스토어", "휴대폰전자기기매장", "가구침구생활소품", "서점ㆍ문구팬시",
        "약국", "농수산청과축산", "화훼꽃집", "유통판매 기타",
    ];
    const Job3000 = [
        "놀이공원테마파크", "호텔ㆍ리조트숙박", "여행ㆍ캠프레포츠", "영화ㆍ공연", "전시ㆍ컨벤션ㆍ세미나",
        "독서실ㆍ고시원ㆍ스터디룸", "PC방", "노래방", "볼링ㆍ당구장", "스크린골프ㆍ야구", "DVDㆍ만화카페ㆍ멀티방",
        "오락실ㆍ게임장", "이색테마카페", "키즈카페", "찜질방ㆍ사우나ㆍ스파", "피트니스ㆍ스포츠", "골프캐디",
        "고속도로휴게소", "문화ㆍ여가ㆍ생활기타",
    ];
    const Job4000 = [
        "매장관리ㆍ판매", "MD", "캐셔ㆍ카운터", "서빙", "주방장ㆍ조리사","주방보조ㆍ설거지", "바리스타",
        "안내데스크ㆍ매표", "주차관리ㆍ주차도우미", "보안ㆍ경비ㆍ경호", "주유ㆍ세차", "전단지배포", "청소ㆍ미화",
        "렌탈관리ㆍA/S", "헤어ㆍ미용ㆍ네일관리", "마사지", "반려동물케어", "베이비시터ㆍ가사도우미",
        "결혼ㆍ연회ㆍ장례도우미", "판촉도우미", "이벤트ㆍ행사스텝", "나레이터모델", "피팅모델", "피부관리",
        "서비스 기타",
    ];
    const Job6000 = [
        "사무보조", "문서작성ㆍ자료조사", "비서", "회계ㆍ경리", "인사총무", "마케팅ㆍ광고ㆍ홍보",
        "번역ㆍ통역", "복사ㆍ출력ㆍ제본", "편집ㆍ교정ㆍ교열", "공공기관ㆍ공기업ㆍ행정", "학교ㆍ도서관ㆍ교육기관",
    ];
    const Job7000 = [
        "고객상담ㆍ인바운드", "텔레마케팅ㆍ아웃바운드", "금융ㆍ보험영업", "일반ㆍ영업판매", "설문조사ㆍ리서치", "영업관리ㆍ지원",
    ];
    const Job8000 = [
       "제조ㆍ가공", "포장ㆍ품질검사", "입출고ㆍ창고관리", "상하차ㆍ소화물분류", "전기ㆍ전자가스", "정비ㆍ수리ㆍA/S",
        "공사ㆍ건설현장", "닥트ㆍ배관설치", "조선소", "생산ㆍ건설ㆍ노무 기타",
    ];
    const Job9000 = [
      "웹ㆍ모바일기획", "사이트ㆍ콘텐츠운영", "바이럴ㆍSNS마케팅", "프로그래머", "HTML코딩", "QAㆍ테스터ㆍ검증",
        "시스템ㆍ네트워크ㆍ보안", "PCㆍ디지털기기 설치 관리",
    ];
    const JobA000 = [
       "입시ㆍ보습학원", "외국어ㆍ어학원", "컴퓨터ㆍ정보통신", "요가ㆍ필라테스 강사", "피트니스 트레이너", "레져스포츠 강사",
        "예체능 강사", "유아ㆍ유치원 교사", "방문ㆍ학습지 교사", "보조교사", "자격증 기술학원 강사", "대학ㆍ교육기관 강사",
        "교육강사 기타",
    ];
    const  JobB000= [
       "웹ㆍ모바일디자인", "그래픽편집디자인", "제품산업디자인", "CADㆍCAMㆍ인테리어", "캐릭터ㆍ애니메이션 디자인", "패션ㆍ잡화디자인",
        "디자인 기타",
    ];
    const JobC000 = [
        "보조출연ㆍ방청", "방송스텝ㆍ촬영보조", "동영상촬영ㆍ편집", "사진촬영ㆍ편집", "조명ㆍ음향", "방송사프로덕션", "신문ㆍ잡지ㆍ출판",
        "미디어 기타",
    ];
    const JobD000 = [
       "운반ㆍ이사", "대리운전ㆍ일반운전", "택시ㆍ버스운전", "수행기사", "화물ㆍ중장비ㆍ특수차", "택배ㆍ퀵서비스", "배달",

    ];
    const JobE000 = [
       "간호사ㆍ간호조무사", "간병ㆍ사회복지사", "코디네이터ㆍ원무", "병동ㆍ외래보조", "수의사ㆍ수의간호사", "실험ㆍ연구보조",
        "생동성ㆍ임상실험",
    ];

    console.log(ch_jobfamily, ch_job);

    if (props.job_value === "유통ㆍ판매") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job2000.map((job, index) =>
                        (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('유통ㆍ판매',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "문화ㆍ여가ㆍ생활") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job3000.map((job, index) =>
                        (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('문화ㆍ여가ㆍ생활',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "서비스") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job4000.map((job, index) =>
                        (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('서비스',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "사무ㆍ회계") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job6000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('사무ㆍ회계',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "고객상담ㆍ영업ㆍ리서치") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job7000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('고객상담ㆍ영업ㆍ리서치',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "생산ㆍ건설ㆍ노무") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job8000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('생산ㆍ건설ㆍ노무',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "ITㆍ인터넷") {
        return (
            <div className="jobSelect">
                <ul>
                    {Job9000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('ITㆍ인터넷',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "교육ㆍ강사") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobA000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('교육ㆍ강사',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "디자인") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobB000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('디자인',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "미디어") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobC000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('미디어',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "운전ㆍ배달") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobD000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('운전ㆍ배달',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.job_value === "병원ㆍ간호ㆍ연구") {
        return (
            <div className="jobSelect">
                <ul>
                    {JobE000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('병원ㆍ간호ㆍ연구',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    }  else {
        return (
            <div className="jobSelect">
                <ul>
                    {Job1000.map((job, index) =>
                         (<li><a className="JobSelect" name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('외식ㆍ음료',job)}> {job}</a></li>))
                    }
                </ul>
            </div>)
    }



}

export default Job2;