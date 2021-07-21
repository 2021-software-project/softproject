import React, { useState, useEffect} from 'react';
import {Link} from'react-router-dom'
import MbtiRecommend from "./MbtiRecommend";

function InfoSelect() {

    const[input, setInput] = useState(
        {
            one: [],
            two: [],
            tree: [],
            four: []
        });

    const {one,two,tree,four} = input;

    const onMbtiChange=(e)=>{
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]:value
        });
    }

    const [rcm,setRcm] = useState('');
    const [mbti,setMbti] = useState('');
    const {userMbti} = mbti;

    const onRcm=()=>{
        setRcm(true)
        console.log(rcm);

        setMbti(
            one+two+tree+four
        )
    }

    //componentDidMount
    useEffect(() => {
        setRcm(false)
        console.log(rcm)
    },[])


    return(
        <div>
            <h4>select mbti</h4>
            <input type="radio" className="mbtiSelect" name="one" onChange={onMbtiChange} value="I"/>
                <span>I</span>
            <input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="N"/>
                <span>N</span>
            <input type="radio" className="mbtiSelect" name="tree" onChange={onMbtiChange} value="F"/>
                <span>F</span>
            <input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="J"/>
                <span>J</span><br/>

            <input type="radio" className="mbtiSelect" name="one" onChange={onMbtiChange} value="E"/>
                <span>E</span>
            <input type="radio" className="mbtiSelect" name="two" onChange={onMbtiChange} value="S"/>
                <span>S</span>
            <input type="radio" className="mbtiSelect" name="tree" onChange={onMbtiChange} value="T"/>
                <span>T</span>
            <input type="radio" className="mbtiSelect" name="four" onChange={onMbtiChange} value="P"/>
                <span>P</span><br/>


            <input type="button" onClick={onRcm} value="추천받기"/>
            <div>
                {one}{two}{tree}{four} <br/>
            </div>

            {rcm?  <MbtiRecommend mbti={mbti}/> : <></>}

        </div>
    )
}

export default InfoSelect;