import React from 'react';
import { Link } from 'react-router-dom'
import MbtiArea from "./MbtiArea";
import "../../css/Rcm.css";
import "../../css/input_mbti.css"

import {useDispatch, useSelector} from "react-redux";
import {changeArea, changeMbti} from "../../store/modules/area_modules";
import axios from "axios";

function Mbtircm(){

    const dispatch = useDispatch();  //변경사항을 스토어에 반영하기 위해 dispatch 만들어줌

    const {ch_areasi} = useSelector(state=>state.area_modules); //스토어에 있는 값 가져옴
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const {ch_mbti} = useSelector(state=>state.area_modules);

    let areasi = "지역을 선택해주세요";
    let areagu = '';
    let mbti = "MBTI를 선택해주세요";

    const onChangeArea = (ch_areasi, ch_areagu) => {
        dispatch(changeArea(ch_areasi, ch_areagu));

    }

    const onChangeMbti = (ch_mbti) => dispatch(changeMbti(ch_mbti));


    const MBTIMeta = [
    "INFP","INFJ","INTP","INTJ","ENTER",
    "ISFP","ISFJ","ISTP","ISTJ","ENTER",
    "ENFP","ENFJ","ENTP","ENTJ","ENTER",
    "ESFP","ESFJ","ESTP","ESTJ",
    ];

    const MBTIAREA = [
    "서울","경기","인천","강원","대전","세종",
    "충남","충북","부산","울산","경남","경북",
    "대구","광주","전남","전북","제주","전국",
    ];

    const onRcmClick = () =>{
        console.log()
    }

    return (
        <div className ="mb_ti-container">

            <h1>MBTI로 아르바이트 추천받기</h1>
            <div className = "con">
            <div align="center">   {/*mbti 선택*/}
                <h2>[MBTI 선택]</h2>
                <h3>선택한 MBTI : <span style={{color:"blueviolet"}}>{ch_mbti}</span> </h3>
                <table id="tb-mbti" width ="50%" border= "2px" solid>
                     <thead>
                     {MBTIMeta.map(i =>
                        i === "ENTER" ?
                            (<tr className = "tr-mbti">
                            <input type="hidden" className="mbti_Select " name={"mbtichk"} value={i}/></tr>)
                            : (<td className = "td-mbti select"><label><input type="radio" className="mbti_Select" name={"mbtichk"} value={i}
                                          onChange={()=>onChangeMbti(i)}/> {i} </label></td>))
                    }
                    </thead>
                </table>
            </div>
            </div>

            <div className="con">
            <h2>[지역 선택]</h2>
            <h3>선택한 지역 : <span style={{color:"blueviolet"}}>{ch_areasi} {ch_areagu} </span></h3>
            <div className="area" align="center">  {/*지역 선택*/}
                <table id="tb-mbti" width ="90%" border= "2px" solid>
                    <tr>
                    {MBTIAREA.map(area =>
                        (<td className ="td-mbti select" border= "1px" solid= "black"><label><input type="radio" className="AreaSelect" name={"areasi"} value={area}
                            onChange={()=>onChangeArea(area,'')}/> {area} </label></td> ))
                    }
                    </tr>

                    <tr>
                        <td colspan='18' colSpan={MBTIAREA.length}><MbtiArea area_si={ch_areasi}/></td>
                    </tr>

                    </table>



                {/*<input type="button" onClick={onRcm} value="추천받기"/>*/}
                </div>
                </div>
                <Link to={{
                    pathname: "/mbti_result",
                    state:{
                    check:"1",}

                }}>
                    <button className="button_primary"  onClick={onRcmClick}> 추천받기</button>
                </Link>

    </div>
    );

}
export default Mbtircm;