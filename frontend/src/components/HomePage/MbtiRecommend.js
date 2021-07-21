import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function MbtiRecommend(props){

    return(
        <div>
            <h1>mbti based recommand page</h1>
            <h2>MBTI : {props.mbti}</h2>
            <Link to="/signup">
                더 추천받기 !
            </Link>
        </div>
    )
}

export default MbtiRecommend;