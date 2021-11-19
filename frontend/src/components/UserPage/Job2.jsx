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
        "서빙", "주방장ㆍ조리사", "주방보조ㆍ설거지", "바리스타", "제과제빵사","일반음식점",
        "레스토랑", "패밀리레스토랑", "패스트푸드점", "치킨ㆍ피자전문점", "커피전문점", "아이스크림ㆍ디저트",
        "베이커리ㆍ도넛ㆍ떡", "호프ㆍ일반주점", "급식ㆍ푸드시스템", "도시락ㆍ반찬",
    ];
    const Job2000 = [
        "매장관리ㆍ판매", "캐셔ㆍ카운터", "판촉도우미", "MDㆍ쇼핑몰운영", "백화점ㆍ쇼핑몰", "유통점ㆍ마트", "도소매ㆍ전통시장", "편의점",
        "의류ㆍ잡화ㆍ쥬얼리매장", "뷰티ㆍ헬스스토어", "휴대폰ㆍ전자기기매장", "가구ㆍ침구ㆍ인테리어", "생활용품샵", "서점ㆍ문구ㆍ팬시", "약국", "농수산ㆍ청과ㆍ축산", "화훼ㆍ꽃집", "스터디룸ㆍ독서실ㆍ고시원",
        "PC방", "노래방", "볼링ㆍ당구장", "스크린 골프ㆍ야구", "DVDㆍ멀티방ㆍ만화카페", "오락실ㆍ게임장", "이색테마카페", "키즈카페",
        "찜질방ㆍ사우나ㆍ스파","피트니스ㆍ스포츠","고속도로휴게소","매장관리ㆍ판매 기타",
    ];
    // const Job3000 = [
    //     "놀이공원ㆍ테마파크", "호텔ㆍ리조트ㆍ숙박", "여행ㆍ캠프ㆍ레포츠", "영화ㆍ공연", "전시ㆍ컨벤션ㆍ세미나",
    //     "스터디룸ㆍ독서실ㆍ고시원", "PC방", "노래방", "볼링ㆍ당구장", "스크린 골프ㆍ야구", "DVDㆍ멀티방ㆍ만화카페",
    //     "오락실ㆍ게임장", "이색테마카페", "키즈카페", "찜질방ㆍ사우나ㆍ스파", "피트니스ㆍ스포츠", "공인중개", "골프캐디",
    //     "고속도로휴게소", "문화ㆍ여가ㆍ생활 기타",
    // ];
    const Job4000 = [
        "놀이공원ㆍ테마파크", "호텔ㆍ리조트ㆍ숙박", "여행ㆍ캠프ㆍ레포츠", "영화관ㆍ공연장", "전시ㆍ컨벤션ㆍ세미나", "안내데스크ㆍ리셉션", "주차유도ㆍ안내",
        "보안ㆍ경비ㆍ경호", "주유ㆍ세차", "렌터카ㆍ차량관리", "전단지배포", "청소ㆍ미화", "렌탈관리ㆍA/S", "골프캐디", "헤어ㆍ미용ㆍ네일샵", "피부관리ㆍ마사지", "반려동물케어",
        "베이비시터ㆍ가사도우미", "결혼ㆍ연회ㆍ장례도우미", "이벤트ㆍ행사스텝", "나레이터모델", "피팅모델", "공인중개", "서비스 기타",
    ];
    const Job6000 = [
        "사무보조", "문서작성ㆍ자료조사", "데이터수집ㆍ가공", "비서", "경리ㆍ회계보조", "인사ㆍ총무", "마케팅ㆍ광고ㆍ홍보", "바이럴ㆍSNS마케팅",
        "번역ㆍ통역", "복사ㆍ출력ㆍ제본", "편집ㆍ교정ㆍ교열", "공공기관ㆍ공기업ㆍ협회", "학교ㆍ도서관ㆍ교육기관",
    ];
    const Job7000 = [
        "고객상담ㆍ인바운드", "텔레마케팅ㆍ아웃바운드", "쇼핑몰인바운드", "금융ㆍ보험영업", "오프라인영업ㆍ판매", "설문조사ㆍ리서치", "콜센터관리ㆍ모니터링", "영업관리ㆍ지원",
    ];
    const Job8000 = [
        "제조ㆍ가공ㆍ조립", "포장ㆍ품질검사", "입출고ㆍ창고관리", "상하차ㆍ소화물 분류", "물류피킹ㆍ포장ㆍ전산", "지게차운전", "금형ㆍ사출ㆍ프레스ㆍ사상",
        "반도체ㆍ전자부품생산", "기계조작ㆍ오퍼레이터", "정비ㆍ수리ㆍ설치ㆍA/S", "전기ㆍ시설물관리", "운반ㆍ설치ㆍ철거", "공사ㆍ건설현장",
        "전기ㆍ칸막이ㆍ배관공사", "인테리어ㆍ보수공사", "조선소", "재단ㆍ재봉", "생산ㆍ건설ㆍ노무 기타",
    ];
    const Job9000 = [
        "웹ㆍ콘텐츠기획", "사이트관리ㆍ기술지원", "프로그래머", "HTML코딩", "QAㆍ테스터ㆍ검증", "시스템ㆍ네트워크ㆍ보안", "PCㆍ디지털기기 설치ㆍ관리",
    ];
    const JobA000 = [
        "입시ㆍ보습학원", "외국어ㆍ어학원", "독서ㆍ논술ㆍ스피치학원", "컴퓨터ㆍ정보통신", "요가ㆍ필라테스 강사", "피트니스 트레이너", "레져스포츠 강사", "예체능 강사", "유아ㆍ유치원",
        "등하원ㆍ승하차도우미", "방문ㆍ학습지", "보조교사", "자격증ㆍ기술학원", "국비교육기관", "학원운영지원", "교재ㆍ교육콘텐츠제작", "교육ㆍ강사 기타",
    ];
    const JobB000= [
       "웹ㆍ모바일디자인", "그래픽ㆍ편집디자인", "제품ㆍ산업디자인", "CADㆍCAMㆍ인테리어디자인", "캐릭터ㆍ애니메이션디자인", "패션ㆍ잡화디자인",
        "디자인 기타",
    ];
    const JobC000 = [
        "보조출연ㆍ방청", "방송스텝ㆍ촬영보조", "동영상촬영ㆍ편집", "사진촬영ㆍ편집", "조명ㆍ음향", "방송사ㆍ프로덕션", "신문ㆍ잡지ㆍ출판",
        "미디어 기타",
    ];
    const JobD000 = [
        "화물ㆍ운송ㆍ이사", "택배ㆍ배송기사", "납품기사", "중장비ㆍ특수차", "발렛파킹", "택시ㆍ대리ㆍ수행기사", "버스ㆍ셔틀운전", "퀵서비스", "배달대행ㆍ음식배달", "도보배달",
    ];
    const JobE000 = [
        "간호조무사ㆍ간호사", "의료기사", "간병ㆍ요양보호사", "원무ㆍ코디네이터", "외래보조ㆍ병동보조", "수의테크니션ㆍ동물보건사", "실험ㆍ연구보조", ",생동성ㆍ임상시험",
    ];


    const onChangeJob = (ch_jobfamily, ch_job, index) => {
        dispatch(changeJob(ch_jobfamily, ch_job));
        setAlbaDetail(
            albaDetailArr.map((a, i)=>
                i===index ? true : false)
        )
    }
    console.log(ch_jobfamily, ch_job);

    if (props.job_value === "매장관리ㆍ판매") {
        return (
            <div className="jobSelect">
                    {Job2000.map((job, index) =>
                        (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('매장관리ㆍ판매',job, index)}> {job}</a></div>))
                    }
            </div>)
    }
    // else if (props.job_value === "문화ㆍ여가ㆍ생활") {
    //     return (
    //         <div className="jobSelect">
    //                 {Job3000.map((job, index) =>
    //                     (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
    //                             onClick={()=>onChangeJob('문화ㆍ여가ㆍ생활',job, index)}> {job}</a></div>))
    //                 }
    //         </div>)
    // }
    else if (props.job_value === "서비스") {
        return (
            <div className="jobSelect">
                    {Job4000.map((job, index) =>
                        (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('서비스',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "사무직") {
        return (
            <div className="jobSelect">
                    {Job6000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('사무직',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "고객상담ㆍ리서치ㆍ영업") {
        return (
            <div className="jobSelect">
                    {Job7000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('고객상담ㆍ리서치ㆍ영업',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "생산ㆍ건설ㆍ노무") {
        return (
            <div className="jobSelect">
                    {Job8000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob("생산ㆍ건설ㆍ노무",job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "ITㆍ기술") {
        return (
            <div className="jobSelect">
                    {Job9000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob("ITㆍ기술",job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "교육ㆍ강사") {
        return (
            <div className="jobSelect">
                    {JobA000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('교육ㆍ강사',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "디자인") {
        return (
            <div className="jobSelect">
                    {JobB000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('디자인',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "미디어") {
        return (
            <div className="jobSelect">
                    {JobC000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('미디어',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "운전ㆍ배달") {
        return (
            <div className="jobSelect">
                    {JobD000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('운전ㆍ배달',job, index)}> {job}</a></div>))
                    }
            </div>)
    } else if (props.job_value === "병원ㆍ간호ㆍ연구") {
        return (
            <div className="jobSelect">
                    {JobE000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('병원ㆍ간호ㆍ연구',job, index)}> {job}</a></div>))
                    }
            </div>)
    }  else {
        return (
            <div className="jobSelect">
                    {Job1000.map((job, index) =>
                         (<div className={"jobSelectDetail"}><a className={`JobSelect${albaDetailArr[index]? ' selectDetailJob':''}`} name={"JobSelect"} value={job}
                                onClick={()=>onChangeJob('외식ㆍ음료',job, index)}> {job}</a></div>))
                    }
            </div>)
    }



}

export default Job2;