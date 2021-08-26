import React from 'react';
import {Link} from "react-router-dom";
import MenuBarItem from "./MenuBarItem";
import "../../css/Bar.css"
import "../../css/style2.css";


function MenuBar(){
    //const menus = [
      //  {name : "MBTI별 추천", path:"/Mbti_rcm"},
        //{name : "개인별 추천", path:"/Personal_rcm"},
     //   {name : "알바평가", path:"/Alba_rating"},
  //  ];
    return(
       // <div className="menubar">
          //  {menus.map((menu,index)=>{
             //   return (
             //       <Link to={menu.path} key={index}>
                        //<MenuBarItem menu={menu}/>
             //       </Link>
               // );
          //  })}


					<div id="sidebar">
						<div class="inner">

								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="/Mbti_rcm">MBTI별 추천</a></li>
										<li><a href="/Personal_rcm">개인별 추천</a></li>
										<li><a href="/Alba_rating">알바평가</a></li>

									</ul>
								</nav>

						</div>
					</div>
       // </div>
    )
}

export default MenuBar;