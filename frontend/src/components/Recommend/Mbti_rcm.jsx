import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

class Mbtircm extends React.Component{

    mbti;
    constructor() {
        super();
        this.state = {
         mbti: '',
        };
    }

  handleMBTIRadio = (e) => {
        console.log(e.target.value);
        this.setState((state) => { //값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옴.
            return {mbti: e.target.value}
        });
}

    render() {
        const MBTIMeta = [
        "INFP","INFJ","INTP","INTJ","ENTER",
        "ISFP","ISFJ","ISTP","ISTJ","ENTER",
        "ENFP","ENFJ","ENTP","ENTJ","ENTER",
        "ESFP","ESFJ","ESTP","ESTJ",
        ];

        return (
            <div className="mbti_rcm">
                <h1>MBTI로 아르바이트 추천받기</h1>

                <div align="center">   {/*mbti 선택*/}
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

                <div>  {/*지역 선택*/}

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