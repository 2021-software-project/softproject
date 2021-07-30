import React from 'react';
import "./MbtiArea.css";
import { useSelector, useDispatch } from 'react-redux';
import {changeArea} from "../../store/modules/area_modules";

function MbtiArea(props){

    const dispatch = useDispatch();
    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);

    const onChangeArea = (ch_areasi, ch_areagu) => dispatch(changeArea(ch_areasi, ch_areagu));

    const SeoulArea = [
        "서울전체", "강남구", "강동구", "강북구", "강서구", "관악구",
        "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구",
        "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구",
        "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구",
        "중구", "중랑구",
    ];
    const KyungkiArea = [
        "경기전체", "가평군", "고양시 덕양구", "고양시 일산동구", "고양시 일산서구", "과천시",
        "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시",
        "동두천시", "부천시", "성남시 분당구", "성남시 수정구", "성남시 중원구", "수원시 권선구",
        "수원시 영통구", "수원시 장안구", "수원시 팔달구", "시흥시", "안산시 단원구", "안산시 상록구",
        "안성시", "안양시 동안구", "안양시 만안구", "양주시", "양평군", "여주시",
        "연천군", "오산시", "용인시 기흥구", "용인시 수지구", "용인시 처인구", "의왕시",
        "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시",
        "화성시"
    ];
    const IncheonArea = [
        "인천전체", "강화군", "계양구", "남동구", "동구", "미추홀구",
        "부평구", "서구", "연수구", "옹진군", "중구"
    ];
    const KangwonArea = [
        "강원전체", "강릉시", "고성군", "동해시", "삼척시", "속초시",
        "양구군", "양양군", "영월군", "원주시", "인제군", "정선군",
        "철원군", "춘천시", "태백시", "평창군", "홍천군", "화천군",
        "횡성군",
    ];
    const DaejeonArea = [
        "대전전체", "대덕구", "동구", "서구", "유성구", "중구",
    ];
    const SejongArea = [
        "세종전체", "세종시",
    ];
    const ChungnamArea = [
        "충남전체", "계룡시", "공주시", "금산군", "논산시", "당진시",
        "보령시", "부여군", "서산시", "서천군", "아산시", "예산군",
        "천안시 동남구", "천안시 서북구", "청양군", "태안군", "홍성군",
    ];
    const ChungbukArea = [
        "충북전체", "괴산군", "단양군", "보은군", "영동군", "옥천군",
        "음성군", "제천시", "증평군", "진천군", "청주시 상당구", "청주시 서원구",
        "청주시 청원구", "청주시 흥덕구", "충주시",
    ];
    const BusanArea = [
        "부산전체", "강서구", "금정구", "기장군", "남구", "동구",
        "동래구", "부산진구", "북구", "사상구", "사하구", "서구",
        "수영구", "연제구", "영도구", "중구", "해운대구",
    ];
    const UlsanArea = [
        "울산전체", "남구", "동구", "북구", "울주군", "중구",
    ];
    const KyungnamArea = [
        "경남전체", "거제시", "거창군", "고성군", "김해시", "남해군",
        "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시",
        "창녕군", "창원시 마산합포구", "창원시 마산회원구", "창원시 성산구", "창원시 의창구", "창원시 진해구",
        "통영시", "하동군", "함안군", "함양군", "합천군",
    ];
    const KyungbukArea = [
        "경북전체", "경산시", "경주시", "고령군", "구미시", "군위군",
        "김천시", "문경시", "봉화군", "상주시", "성주군", "안동시",
        "영덕군", "영양군", "영주시", "영천시", "예천군", "울릉군",
        "울진군", "의성군", "청도군", "청송군", "칠곡군", "포항시 남구",
        "포항시 북구",
    ];
    const DaeguArea = [
        "대구전체", "남구", "달서구", "달성군", "동구", "북구",
        "서구", "수성구", "중구",
    ];
    const GwangjuArea = [
        "광주전체", "광산구", "남구", "동구", "북구", "서구",
    ];
    const JeonnamArea = [
        "전남전체", "강진군", "고흥군", "곡성군", "광양시", "구례군",
        "나주시", "담양군", "목포시", "무안군", "보성군", "순천시",
        "신안군", "여수시", "영광군", "영암군", "완도군", "장성군",
        "장흥군", "진도군", "함평군", "해남군", "화순군",
    ];
    const JeonbukArea = [
        "전북전체", "고창군", "군산시", "김제시", "남원시", "무주군",
        "부안군", "순창군", "완주군", "익산시", "임실군", "장수군",
        "전주시 덕진구", "전주시 완산구", "정읍시", "진안군",
    ];
    const JejuArea = [
        "제주전체", "서귀포시", "제주시",
    ];
    const JeonkukArea = [
        "전국전체",
    ];

    console.log(ch_areasi, ch_areagu);

    if (props.area_si === "부산") {
        return (
            <div className="areaSelect">
                <ul>
                    {BusanArea.map((areagu, index) =>
                        (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('부산',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "경기") {
        return (
            <div className="areaSelect">
                <ul>
                    {KyungkiArea.map((areagu, index) =>
                        (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('경기',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "인천") {
        return (
            <div className="areaSelect">
                <ul>
                    {IncheonArea.map((areagu, index) =>
                        (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('인천',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "강원") {
        return (
            <div className="areaSelect">
                <ul>
                    {KangwonArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('강원',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "대전") {
        return (
            <div className="areaSelect">
                <ul>
                    {DaejeonArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('대전',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "세종") {
        return (
            <div className="areaSelect">
                <ul>
                    {SejongArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('세종',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "충남") {
        return (
            <div className="areaSelect">
                <ul>
                    {ChungnamArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('충남',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "충북") {
        return (
            <div className="areaSelect">
                <ul>
                    {ChungbukArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('충북',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "울산") {
        return (
            <div className="areaSelect">
                <ul>
                    {UlsanArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('울산',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "경남") {
        return (
            <div className="areaSelect">
                <ul>
                    {KyungnamArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('경남',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "경북") {
        return (
            <div className="areaSelect">
                <ul>
                    {KyungbukArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('경북',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "대구") {
        return (
            <div className="areaSelect">
                <ul>
                    {DaeguArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('대구',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "광주") {
        return (
            <div className="areaSelect">
                <ul>
                    {GwangjuArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('광주',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "전남") {
        return (
            <div className="areaSelect">
                <ul>
                    {JeonnamArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('전남',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "전북") {
        return (
            <div className="areaSelect">
                <ul>
                    {JeonbukArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('전북',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "제주") {
        return (
            <div className="areaSelect">
                <ul>
                    {JejuArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('제주',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else if (props.area_si === "전국") {
        return (
            <div className="areaSelect">
                <ul>
                    {JeonkukArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('전국',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    } else {
        return (
            <div className="areaSelect">
                <ul>
                    {SeoulArea.map((areagu, index) =>
                         (<li><a className="AreaSelect" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('서울',areagu)}> {areagu}</a></li>))
                    }
                </ul>
            </div>)
    }



}

export default MbtiArea;
