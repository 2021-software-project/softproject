import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeArea, changeSelectArea} from "../../store/modules/area_modules";
import {Link} from "react-router-dom";
import { TiDeleteOutline } from 'react-icons/ti';
import MbtiArea from "./MbtiArea";
import "../../css/RcmSelect.css";


function Personal_rcm() {

    let username = localStorage.getItem("username")

    const dispatch = useDispatch();  //변경사항을 스토어에 반영하기 위해 dispatch 만들어줌

    const {ch_areasi} = useSelector(state => state.area_modules); //스토어에 있는 값 가져옴
    const {ch_areagu} = useSelector(state => state.area_modules);
    const {select_area} = useSelector(state => state.area_modules);
    //해당 함수가 호출되면 변경사항을 스토어에 변경해줌
    const [areaguArr, setAreaguArr] = useState(Array(18).fill(false));
    const [selArea, setSelArea] = useState([]);

    const AREA = [
        "서울", "경기", "인천", "강원", "대전", "세종",
        "충남", "충북", "부산", "울산", "경남", "경북",
        "대구", "광주", "전남", "전북", "제주", "전국",
    ];
    const onChangeArea = (ch_areasi, ch_areagu, index) => {
        dispatch(changeArea(ch_areasi, ch_areagu));
        setAreaguArr(
            areaguArr.map((a, i) =>
                i === index ? true : false)
        )
    }
    const selectedAreaDelete = (num)=>{
        if(num===0){
            setSelArea(selArea.slice(2,6))
        }else if(num==2){
            setSelArea(selArea.slice(0,2).concat(selArea.slice(4,6)))
        }else if(num==4){
            setSelArea(selArea.slice(0,4))
        }

    }

    return (
        <div className="per_son-container">
            <div className="con2">
                <div className="personalTitle">{username}님 <font>'성향'</font>에 맞는 알바를 찾으시나요?</div>
            </div>
            <div className="areaSelectDiv">

                <div className="area" id="inner" align="center">
                    <div id="td-areasi">
                        <table>
                            <tr>
                                {AREA.map((area, index) =>
                                    (<td className={`areasiTable${areaguArr[index] ? ' select' : ''}`}>
                                        <label><input type="radio" className="areasiSelect" name={"areasi"} value={area}
                                                      onChange={() => onChangeArea(area, '', index)}/>
                                            <span>{area}</span> </label></td>))
                                }
                            </tr>
                        </table>
                    </div>
                    <MbtiArea area_si={ch_areasi} selArea={selArea} setSelArea={setSelArea}/>

                </div>
            </div>

            <div className="selectedArea">
                {select_area.length >= 2 ?
                    <span className="selectedAreaFont">{select_area[0]} {select_area[1]}
                        <span className="selectedAreaDelete" style={{cursor:"pointer", fontSize:"22px", verticalAlign:"middle"}}
                              onClick={()=>selectedAreaDelete(0)}><TiDeleteOutline  style={{marginTop:"3.5px"}}/></span>
                    </span> : ''}
                {select_area.length >= 4 ?
                    <span className="selectedAreaFont">{select_area[2]} {select_area[3]}
                        <span className="selectedAreaDelete" style={{cursor:"pointer", fontSize:"22px", verticalAlign:"middle"}}
                              onClick={()=>selectedAreaDelete(2)}><TiDeleteOutline  style={{marginTop:"3.5px"}}/></span>
                    </span> : ''}
                {select_area.length >= 6 ?
                    <span className="selectedAreaFont">{select_area[4]} {select_area[5]}
                        <span className="selectedAreaDelete" style={{cursor:"pointer", fontSize:"22px", verticalAlign:"middle"}}
                              onClick={()=>selectedAreaDelete(4)}><TiDeleteOutline  style={{marginTop:"3.5px"}}/></span>
                    </span> : ''}
            </div>

            <div className="con2">
            {
                selArea.length >= 2 ?
                    <div>
                        <Link to={{
                            pathname: "/personal_result",
                            state: {
                                check: "1",
                            }
                        }}>
                            <button className="button_primary"> 추천받기</button>
                        </Link>
                    </div>
                    :
                    <div>
                    <span>최대 3개의 주소를 선택해주세요<p/></span>
                    <button className="button_primary"> 추천받기</button>
                    </div>

            }
            </div>
        </div>

    );
}

export default Personal_rcm;