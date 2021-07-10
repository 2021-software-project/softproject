import React, {Component, useState} from 'react';
import {Link} from'react-router-dom'
import MbtiRecommend from "./MbtiRecommend";

function InfoSelect(){

    const[inputs, setInputs] = useState(
        {
            mbti :[],
            address:[]
        });

    const {mbti,address} = inputs;

    const onChange=(e)=>{
        const { value, name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    return(

        <div>
            select mbti<br/>
            <input name="mbti" placeholder="mbti" onChange={onChange} value={mbti}/><br/>
            select address<br/>
            <input name="address" placeholder="address" onChange={onChange} value={address}/><br/>
            <Link to="/mbti"> 추천받기 </Link>
            <div>
                mbti : {mbti} <br/>
                address : {address}
            </div>

        </div>
    )
}

export default InfoSelect;