import React from 'react';
import {useLocation} from "react-router-dom"
import {useSelector} from "react-redux";


function Mbtiresult() {
    const data = useLocation();
    console.log(data);

    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const {ch_mbti} = useSelector(state=>state.area_modules);

    return(

        <div>
        <h1>MBTI로 아르바이트 추천받기</h1>
        <h2>당신이 선택한 MBTI : {ch_mbti}</h2>
        <h2>당신이 선택한 지역 '시' : {ch_areasi}</h2>
        <h2>당신이 선택한 지역 '구' : {ch_areagu}</h2>
        </div>
    )
}
export default Mbtiresult;