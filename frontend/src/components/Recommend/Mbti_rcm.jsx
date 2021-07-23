import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import MbtiRecommend from "../HomePage/MbtiRecommend";
import MbtiArea from "./MbtiArea";


class Mbtircm extends React.Component{

    mbti;
    constructor() {
        super();
        this.state = {
            mbti: '',
            area_si: '',
            area_gu:'',
        };
    }

  handleMBTIRadio = (e) => {
        console.log(e.target.value);
        this.setState((state) => { //값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옴.
            return {mbti: e.target.value}
        });
    }

  handleAreaRadio = (e) => {
        console.log(e.target.value);
        this.setState((state) => { //값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옴.
            return {area_si: e.target.value}
        });
    }



    render() {
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
                    <table>
                        <thead>
                        {MBTIMeta.map(i =>
                            i === "ENTER" ?
                                (<tr><input type="hidden" className="mbtiSelect" name={"mbtichk"} value={i}/></tr>)
                                : (<td><input type="radio" className="mbtiSelect" name={"mbtichk"} value={i}
                                    onChange={e => this.handleMBTIRadio(e)}/> {i}</td>))
                        }
                        </thead>
                    </table>
                </div>

                <h3>[지역 선택]</h3>
                <div className="area" align="center">  {/*지역 선택*/}
                    <table>
                        <tr>
                        {MBTIAREA.map(area =>
                            (<td><input type="radio" className="AreaSelect" name={"areasi"} value={area}
                                onChange={e => this.handleAreaRadio(e)}/> {area} </td> ))
                        }
                        </tr>
                    </table>
                        <tr colspan={MBTIAREA.length}><MbtiArea area_si={this.state.area_si}/></tr>






                </div>
                {/*<input type="button" onClick={onRcm} value="추천받기"/>*/}

                <Link to={{
                    pathname: "/mbti_result",
                    state: {
                        mbti:this.state.mbti,

                    }
                }}>
                    <button> 추천받기</button>
                </Link>

            </div>
        );
    }
}
export default Mbtircm;