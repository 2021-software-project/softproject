import React from 'react';
import {useSelector} from "react-redux";


function Personal_result() {

    const {ch_areasi} = useSelector(state=>state.area_modules);
    const {ch_areagu} = useSelector(state=>state.area_modules);

    return(
        <div>
        <h1>자신에게 맞는 아르바이트 추천받기</h1>
        <h2>당신이 선택한 지역 '시' : {ch_areasi}</h2>
        <h2>당신이 선택한 지역 '구' : {ch_areagu}</h2>
        </div>
    )
}
export default Personal_result;