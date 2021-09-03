import React from 'react';
import {Link} from "react-router-dom";
import MenuBarItem from "./MenuBarItem";

import "../../css/SideMenuBar.css";
import "../../css/styles.css";

function MenuBar(){

    return(
        <div className="navbar-expand-lg menubar-color text-uppercase" id="menubar">
            <div className="container">

                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-black-50"
                            type="button" data-bs-toggle="collapse" data-bs-target="#menuitem"
                            aria-controls="menuitem" aria-expanded="false" aria-label="Toggle navigation">
                        =
                    </button>
                    <div className="collapse navbar-collapse " id="menuitem">
                        <ul className="menubar-nav margin">
                            <li className="nav-item"><a className="nav-link py-0 "
                                                                     href="/Mbti_rcm">MBTI별 추천</a></li>
                            <li className="nav-item "><a className="nav-link py-0 "
                                                                     href="/Personal_rcm">개인별 추천</a></li>
                            <li className="nav-item"><a className="nav-link py-0"
                                                                     href="/Alba_rating">알바평가</a></li>


                        </ul>
                    </div>
            </div>



            </div>







    )
}

export default MenuBar;