import "../../css/styles.css";
import React from "react";


function Footer(){

    return(
        <div className="text-center" id="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">본사 위치</h4>
                            <p className="lead mb-0">
                                부산광역시 사하구 낙동대로 .... 동아대학교
                                <br/>
                                S06 627 연구실
                            </p>
                        </div>

                        {/*<div className="col-lg-4 mb-5 mb-lg-0">*/}
                        {/*    <h4 className="text-uppercase mb-4">Around the Web</h4>*/}

                        {/*</div>*/}

                        {/*<div className="col-lg-4">*/}
                        {/*    <h4 className="text-uppercase mb-4">About Freelancer</h4>*/}
                        {/*    <p className="lead mb-0">*/}
                        {/*        Freelance is a free to use, MIT licensed Bootstrap theme created by*/}

                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                </div>
        </div>
    )
}

export default Footer;
