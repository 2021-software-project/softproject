import React, {useState, useEffect, useRef, useCallback} from 'react';
import MbtiRecommend from "./MbtiRecommend";
import "../../css/home.css";
import "../../css/Rcm.css";
import { Link } from "react-scroll"

function HomeMbti() {

    const[input, setInput] = useState(
        {
            one: '',
            two: '',
            three: '',
            four: '',
        });

    const [mbti,setMbti] = useState('');
    const [rcm,setRcm] = useState(false);

    useEffect(()=>{
        setMbti('')
        setRcm(false)
    },[])

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
     const changeRcm = () =>{
        if(mbti.length < 4){
            alert("mbti를 선택해 주세요")
        }
        else{
            setRcm(true)
        }
    };
    return(
        <div id="inner">
            <section className="sc-mbti">
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
                        {mbti.length < 4 ?
                            <button className="button_primary" type="button" onClick={changeRcm}> 추천받기</button> :
                            <Link to="home-mbti-rcm" spy={true} smooth={true}>
                                <button className="button_primary" type="button" onClick={changeRcm}> 추천받기</button>
                            </Link>
                        }
                    </div>
            </section>
            <div id="home-mbti-rcm" className="home-mbti-rcm">
                {rcm ?<MbtiRecommend mbti={mbti}/> : <span></span>}
            </div>
        </div>
    )
}

export default HomeMbti;