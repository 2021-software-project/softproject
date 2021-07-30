import React from 'react';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function Albaratingresult(){
    const data = useLocation();
    console.log(data);

    const {ch_jobfamily} = useSelector(state=>state.job_modules);
    const {ch_job} = useSelector(state=>state.job_modules);
    const {ch_score} = useSelector(state=>state.job_modules);

    return(

        <div>
            <h1>내가 매긴 평점</h1>
            <h2>내가 했었던 알바 업ㆍ직종 <br/> : {ch_jobfamily} => {ch_job}</h2>
            <h2>점수 : {ch_score}</h2>
        </div>
    )

}
export default Albaratingresult;