import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeArea} from "../../store/modules/area_modules";
import {Link} from "react-router-dom";

import MbtiArea from "./MbtiArea";
import "../../css/Rcm.css";


function Personal_rcm(){

    const dispatch = useDispatch();  //변경사항을 스토어에 반영하기 위해 dispatch 만들어줌

    const {ch_areasi} = useSelector(state=>state.area_modules); //스토어에 있는 값 가져옴
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const onChangeArea = (ch_areasi, ch_areagu) => dispatch(changeArea(ch_areasi, ch_areagu));
    //해당 함수가 호출되면 변경사항을 스토어에 변경해줌

    const AREA = [
        "서울","경기","인천","강원","대전","세종",
        "충남","충북","부산","울산","경남","경북",
        "대구","광주","전남","전북","제주","전국",
        ];

    return(
        <div className ="per_son-container">
            <div className = "con2">
            <h1>자신에게 맞는 아르바이트 추천받기</h1>
             </div>

                <h2>[지역 선택]</h2>
                    <h3>선택한 지역 : <span style={{color:" #726193"}}>{ch_areasi} {ch_areagu}</span> </h3>
                    <div className="area" align="center">  {/*지역 선택*/}
                        <p></p>
                        <table id="tb-mbti" width ="80%" border= "2px" solid>
                            <tr>
                            {AREA.map(area =>
                                (<td className ="td-mbti select" border= "1px" solid= "black"><label><input type="radio" className="AreaSelect" name={"areasi"} value={area}
                                                                                                            onChange={()=>onChangeArea(area,'')}/> <span>{area}</span> </label></td> ))
                            }
                            </tr>
                        </table>
                            <tr colSpan={AREA.length}><MbtiArea area_si={ch_areasi}/></tr>

                    </div>

            <div className ="con2">
                <Link to={{pathname: "/personal_result",
                    state:{
                    check:"1",}
                }}>
                        <button className="button_primary"> 추천받기</button>
                </Link>
            </div>
        </div>

    );
}

export default Personal_rcm;