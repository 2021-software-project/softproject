import React, {useState, useEffect, useRef, useCallback} from 'react';
import MbtiRecommend from "./MbtiRecommend";
import "../../css/home.css";
import "../../css/Rcm.css";

function HomeMbti() {

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

    /*useEffect(()=>{
        resultRef.current.scrollIntoView({behavior: 'smooth', block: 'end'})
    },[rcm])*/



    return(
        <div id="inner">
            <section className="sc-mbti" ref={resultRef}>

                {/*form onSubmit={changeRcm} target="iframe">*/}
                <table id="User-mbti" width="70%" align="center">
                    <tr>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="one" onChange={onMbtiChange} value="I" required/>
                            <span  className="select3">I</span></label></td>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="N" required/>
                            <span className="select3">N</span></label></td>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="three" onChange={onMbtiChange} value="F" required/>
                            <span className="select3">F</span></label></td>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="J" required/>
                            <span className="select3">J</span></label></td>
                    </tr>
                    <tr>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" onChange={onMbtiChange} name="one"  value="E"/>
                            <span className="select3">E</span></label></td>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="S"/>
                            <span className="select3">S</span></label></td>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="three" onChange={onMbtiChange} value="T"/>
                            <span className="select3">T</span></label></td>
                        <td className ="user-mbti"><label><input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="P"/>
                            <span className="select3">P</span></label></td>
                    </tr>
                </table>
                    <p></p>
                    <div id="inner">
                <input onClick={changeRcm} className="button_primary" type="submit" value="추천받기"/></div>
                {/*</form>*/}

                {/*페이지 이동 없애기 -> form 의 target을 iframe으로 설정, iframe은 안 보이게 설정*/}
                <div >
                    <iframe name="iframe1" style={{display: 'none'}}> </iframe>
                </div>

                {rcm ?<MbtiRecommend mbti={mbti}/> : <></>}

            </section>

        </div>
    )
}

export default HomeMbti;