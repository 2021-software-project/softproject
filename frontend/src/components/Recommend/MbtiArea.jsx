import React, {useEffect, useState} from 'react';
import "../../css/MbtiArea.css";
import "../../css/Rcm.css";
import { useSelector, useDispatch } from 'react-redux';
import {changeArea, changeSelectArea} from "../../store/modules/area_modules";

function MbtiArea(props){
    const {selArea, setSelArea} = props;
    const dispatch = useDispatch();
    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const {select_area} = useSelector(state=>state.area_modules);

    //const [selArea, setSelArea] = useState([]);

    useEffect(()=>{
        dispatch(changeSelectArea(selArea));

    }, [selArea]);

    const onChangeArea = (ch_areasi, ch_areagu) => {
        dispatch(changeArea(ch_areasi, ch_areagu));
        if(ch_areasi !== ''){
            if(selArea.includes(ch_areagu) || selArea.length>=6)
            {

            }
            else {
                setSelArea([...selArea, ch_areasi, ch_areagu]);

            }
        }

    }

    const SeoulArea = ['전체', '성동구', '종로구', '광진구', '성북구', '금천구', '도봉구', '서대문', '구로구', '중랑구', '강남구', '중구', '양천구', '용산구', '동작구', '영등포', '관악구', '동대문', '강서구', '강동구', '송파구', '강북구', '노원구', '마포구', '서초구', '은평구'];

    const KyungkiArea = ['전체', '동두천', '평택시', '용인시', '의정부', '포천시', '김포시', '연천군', '광명시', '안성시', '파주시', '시흥시', '안양시', '양주시', '고양시', '군포시', '수원시', '안산시', '화성시', '과천시', '성남시', '부천시', '양평군', '하남시', '남양주', '여주시', '오산시', '광주시', '이천시', '가평군', '의왕시', '구리시'];

    const IncheonArea = ['전체', '남동구', '계양구', '연수구', '서구', '옹진군', '강화군', '동구', '중구', '미추홀', '부평구'];

    const KangwonArea = ['전체', '횡성군', '동해시', '화천군', '평창군', '철원군', '춘천시', '고성군', '속초시', '양양군', '인제군', '강릉시', '태백시', '영월군', '삼척시', '홍천군', '정선군', '원주시', '양구군'];

    const DaejeonArea = ['전체', '유성구', '대덕구', '서구', '동구', '중구'];

    const SejongArea = ['전체',  '세종시'];

    const ChungnamArea = ['전체', '태안군', '부여군', '당진시', '예산군', '서산시', '아산시', '계룡시', '천안시', '홍성군', '논산시', '청양군', '금산군', '서천군', '공주시', '보령시'];

    const ChungbukArea = ['전체', '괴산군', '영동군', '옥천군', '충주시', '보은군', '진천군', '단양군', '증평군', '청주시', '제천시', '음성군'];

    const BusanArea = ['전체', '강서구', '영도구', '금정구', '기장군', '사상구', '서구', '해운대', '남구', '동래구', '부산진', '사하구', '동구', '중구', '북구', '연제구', '수영구'];

    const UlsanArea = ['전체', '울주군', '남구', '동구', '중구', '북구'];

    const KyungnamArea = ['전체', '하동군', '의령군', '진주시', '함양군', '거창군', '김해시', '통영시', '양산시', '합천군', '고성군', '사천시', '함안군', '창원시', '남해군', '밀양시', '창녕군', '산청군', '거제시'];

    const KyungbukArea = ['전체', '영천시', '영덕군', '성주군', '의성군', '청송군', '경산시', '경주시', '안동시', '울릉군', '봉화군', '고령군', '김천시', '영주시', '예천군', '상주시', '울진군', '칠곡군', '군위군', '구미시', '청도군', '문경시', '포항시', '영양군'];

    const DaeguArea = ['전체', '달성군', '서구', '남구', '달서구', '수성구', '동구', '중구', '북구'];

    const GwangjuArea = ['전체', '광산구', '서구', '남구', '동구', '북구'];

    const JeonnamArea = ['전체', '영광군', '여수시', '신안군', '함평군', '고흥군', '진도군', '담양군', '장성군', '장흥군', '완도군', '목포시', '보성군', '곡성군', '강진군', '해남군', '구례군', '광양시', '순천시', '나주시', '화순군', '무안군', '영암군'];

    const JeonbukArea = ['전체', '군산시', '순창군', '전주시', '완주군', '무주군', '정읍시', '부안군', '남원시', '임실군', '익산시', '김제시', '고창군', '장수군', '진안군'];

    const JejuArea = ['전체',  '제주시', '서귀포'];

    const JeonkukArea = ['전국전체']


    if (props.area_si === "부산") {
        return (
            <div className="areaSelect">
                    {BusanArea.map((areagu, index) =>
                        (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('부산',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "경기") {
        return (
            <div className="areaSelect">
                    {KyungkiArea.map((areagu, index) =>
                        (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                              onClick={()=>onChangeArea('경기',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "인천") {
        return (
            <div className="areaSelect">
                    {IncheonArea.map((areagu, index) =>
                        (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('인천',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "강원") {
        return (
            <div className="areaSelect">
                    {KangwonArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('강원',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "대전") {
        return (
            <div className="areaSelect">
                    {DaejeonArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('대전',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "세종") {
        return (
            <div className="areaSelect">
                    {SejongArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('세종',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "충남") {
        return (
            <div className="areaSelect">
                    {ChungnamArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('충남',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "충북") {
        return (
            <div className="areaSelect">
                    {ChungbukArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('충북',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "울산") {
        return (
            <div className="areaSelect">
                    {UlsanArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('울산',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "경남") {
        return (
            <div className="areaSelect">
                    {KyungnamArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('경남',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "경북") {
        return (
            <div className="areaSelect">
                    {KyungbukArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('경북',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "대구") {
        return (
            <div className="areaSelect">
                    {DaeguArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('대구',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "광주") {
        return (
            <div className="areaSelect">
                    {GwangjuArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('광주',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "전남") {
        return (
            <div className="areaSelect">
                    {JeonnamArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('전남',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "전북") {
        return (
            <div className="areaSelect">
                    {JeonbukArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('전북',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "제주") {
        return (
            <div className="areaSelect">
                    {JejuArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('제주',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else if (props.area_si === "전국") {
        return (
            <div className="areaSelect">
                    {JeonkukArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('전국',areagu)}> {areagu}</div>))
                    }
            </div>)
    } else {
        return (
            <div className="areaSelect">
                    {SeoulArea.map((areagu, index) =>
                         (<div className="areaSelectGu" name={"AreaSelect"} value={areagu}
                                onClick={()=>onChangeArea('서울',areagu)}> {areagu}</div>))
                    }
            </div>)
    }





}

export default MbtiArea;

