import React, { useState, useEffect} from 'react';
import MbtiRecommend from "./MbtiRecommend";


function InfoSelect() {

    const[input, setInput] = useState(
        {
            one: [],
            two: [],
            tree: [],
            four: []
        });

    const [mbti,setMbti] = useState('');

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

    const onRcm=()=>{
        setRcm(
            true
        )
    }

    return(
        <div>
            <h4>select mbti</h4>
            <input type="radio" className="mbtiSelect" name="one" onChange={onMbtiChange} value="I"/>
                <span>I</span>
            <input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="N"/>
                <span>N</span>
            <input type="radio" className="mbtiSelect" name="three" onChange={onMbtiChange} value="F"/>
                <span>F</span>
            <input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="J"/>
                <span>J</span><br/>

            <input type="radio" className="mbtiSelect" name="one" onChange={onMbtiChange} value="E"/>
                <span>E</span>
            <input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="S"/>
                <span>S</span>
            <input type="radio" className="mbtiSelect" name="three" onChange={onMbtiChange} value="T"/>
                <span>T</span>
            <input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="P"/>
                <span>P</span><br/>

            <input type="button" onClick={onRcm} value="추천받기"/>
            {rcm?  <MbtiRecommend mbti={mbti}/> : <></>}

        </div>
    )
}

export default InfoSelect;