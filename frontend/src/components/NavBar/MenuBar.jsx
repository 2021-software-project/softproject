import React from 'react';
import {Link} from "react-router-dom";
import MenuBarItem from "./MenuBarItem";
import "./Bar.css"

function MenuBar(){
    const menus = [
        {name : "MBTI별 추천", path:"/Mbti_rcm"},
        {name : "개인별 추천", path:"/Personal_rcm"},
        {name : "알바후기", path:"/Mbti_rcm"},
    ];
    return(
        <div className="menubar">
            {menus.map((menu,index)=>{
                return (
                    <Link to={menu.path} key={index}>
                        <MenuBarItem menu={menu}/>
                    </Link>
                );
            })}
        </div>
    )
}

export default MenuBar;