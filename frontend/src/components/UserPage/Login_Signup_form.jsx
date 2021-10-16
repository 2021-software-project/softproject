import React, { useState } from 'react';
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import NavBar from "../NavBar/NavBar";
import '../../css/login_signup.css'


function LoginSignupform(){

    const [checked, setChecked] = useState(false);

    const checkHandler = (e)=>{
        setChecked(e);
    }


    return(
        <div className="LoginSignupform">
            <head>
                <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'/>
                <link rel="stylesheet" href="../../css/login_signup.css"/>
            </head>

            <body>
                <div className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-3"><span style={{cursor:"pointer"}} onClick={()=>checkHandler(false)}>Log In </span>
                                        <span style={{cursor:"pointer"}} onClick={()=>checkHandler(true)}>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" checked={checked}
                                           onChange={(e)=>checkHandler(!checked)}
                                           id="reg-log" name="reg-log"/>
                                    <label htmlFor="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <LoginPage/>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <SignupPage/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </body>

        </div>
    )
}

export default LoginSignupform;