import "../../css/styles.css";
import React from "react";


function Footer(){

    return(
        <div className="text-center" id="footer">
                <div className="container">
                    <div className="row">

                        <div>
                            <h4 className="text-uppercase mb-4">본사 위치</h4>
                            <p className="lead mb-0">
                                부산광역시 사하구 낙동대로 .... 동아대학교
                                <br/><br/>
                                {/*S06 627 연구실*/}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;
