// input_mbti


import React, {useState, useEffect, useRef, useCallback} from 'react';
import MbtiRecommend from "./MbtiRecommend";
import "../../css/input_mbti.css"
import "../../css/home.css"

function InfoSelect() {

    const[input, setInput] = useState(
        {
            one: [],
            two: [],
            tree: [],
            four: []
        });

    const [mbti,setMbti] = useState('INFJ');

    const {one,two,three,four} = input;

    useEffect(()=>{
        setMbti(
            one+two+three+four
        )
        setRcm(false)
    },[one,two,three,four])

    const onMbtiChange=(e)=>{
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]:value
        });
    }

    const [rcm,setRcm] = useState(false);

    const changeRcm = () =>{
        setRcm(
            true
        )
    };

    const resultRef = useRef();

    useEffect(()=>{
        resultRef.current.scrollIntoView({behavior: 'smooth', block: 'end'})
    },[rcm])



    return(
        <div>
            <header className="bg-primary text-black text-center" >
                    <div className="container d-flex align-items-center flex-column">
                        <h1 className="masthead-heading text-uppercase mb-0">MBTI별 알바 추천</h1>
                    </div>
            </header>

            <div id="m_container">
            <section className="sc-mbti" ref={resultRef}>
                <div id="home_container-2">
                <form onSubmit={changeRcm} target="iframe1">
                <table className="tb-mbti">
                    <tr>
                        <td><label><input type="radio" className="mbtiSelect" name="one" onChange={onMbtiChange} value="I" required/>
                            <span>I</span></label></td>
                        <td><label><input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="N" required/>
                            <span>N</span></label></td>
                        <td><label><input type="radio" className="mbtiSelect" name="three" onChange={onMbtiChange} value="F" required/>
                            <span>F</span></label></td>
                        <td><label><input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="J" required/>
                            <span>J</span></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="radio" className="mbtiSelect" onChange={onMbtiChange} name="one"  value="E"/>
                            <span>E</span></label></td>
                        <td><label><input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="S"/>
                            <span>S</span></label></td>
                        <td><label><input type="radio" className="mbtiSelect" name="three" onChange={onMbtiChange} value="T"/>
                            <span>T</span></label></td>
                        <td><label><input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="P"/>
                            <span>P</span></label></td>
                    </tr>
                </table>
                <input className="btn btn-primary btn-xl" type="submit" value="추천받기"/>
                </form>
                </div>
                {/*페이지 이동 없애기 -> form 의 target을 iframe으로 설정, iframe은 안 보이게 설정*/}
                <div >
                    <iframe name="iframe1" style={{display: 'none'}}></iframe>
                </div>
                {rcm ?<MbtiRecommend mbti={mbti}/> : <></>}
            </section>
            </div>
        </div>
    )
}

export default InfoSelect;