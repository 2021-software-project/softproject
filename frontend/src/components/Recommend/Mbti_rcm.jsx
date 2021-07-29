import React from 'react';
import { Link } from 'react-router-dom'
import MbtiArea from "./MbtiArea";
import "./MbtiArea.css";
import {useDispatch, useSelector} from "react-redux";
import {changeArea, changeMbti} from "../../store/modules/area_modules";


function Mbtircm(){

    const dispatch = useDispatch();  //변경사항을 스토어에 반영하기 위해 dispatch 만들어줌

    const {ch_areasi} = useSelector(state=>state.area_modules); //스토어에 있는 값 가져옴
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const {ch_mbti} = useSelector(state=>state.area_modules);
    const onChangeArea = (ch_areasi, ch_areagu) => dispatch(changeArea(ch_areasi, ch_areagu));
    const onChangeMbti = (ch_mbti) => dispatch(changeMbti(ch_mbti));
  //   mbti;
  //   constructor() {
  //       super();
  //       this.state = {
  //           mbti: '',
  //           area_si: '',
  //           area_gu:'',
  //       };
  //   }
  //
  // handleMBTIRadio = (e) => {
  //       console.log(e.target.value);
  //       this.setState((state) => { //값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옴.
  //           return {mbti: e.target.value}
  //       });
  //   }
  //
  // handleAreaRadio = (e) => {
  //       console.log(e.target.value);
  //       this.setState((state) => { //값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옴.
  //           return {area_si: e.target.value}
  //       });
  //   }



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


    return (
        <div className="mbti_rcm">
            <h1>MBTI로 아르바이트 추천받기</h1>
            <div align="center">   {/*mbti 선택*/}
                <h3>[MBTI 선택]</h3>
                <h4>선택한 MBTI : <span style={{color:"blueviolet"}}>{ch_mbti}</span> </h4>
                <table>
                    <thead>
                    {MBTIMeta.map(i =>
                        i === "ENTER" ?
                            (<tr><input type="hidden" className="mbtiSelect" name={"mbtichk"} value={i}/></tr>)
                            : (<td><input type="radio" className="mbtiSelect" name={"mbtichk"} value={i}
                                onChange={()=>onChangeMbti(i)}/> {i}</td>))
                    }
                    </thead>
                </table>
            </div>

            <h3>[지역 선택]</h3>
            <h4>선택한 지역 : <span style={{color:"blueviolet"}}>{ch_areasi} {ch_areagu} </span></h4>
            <div className="area" align="center">  {/*지역 선택*/}
                <table>
                    <tr>
                    {MBTIAREA.map(area =>
                        (<td><input type="radio" className="AreaSelect" name={"areasi"} value={area}
                            onChange={()=>onChangeArea(area,'')}/> {area} </td> ))
                    }
                    </tr>
                </table>
                    <tr colSpan={MBTIAREA.length}><MbtiArea area_si={ch_areasi}/></tr>


            </div>
            {/*<input type="button" onClick={onRcm} value="추천받기"/>*/}

            <Link to={{
                pathname: "/mbti_result",

            }}>
                <button> 추천받기</button>
            </Link>

        </div>
    );

}
export default Mbtircm;