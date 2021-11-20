import React from "react";
import {MailOutlined} from '@ant-design/icons';
import "../../css/navBar_footer.css"

function Footer(){
    return(
        <div className="text-center" id="footer">
                <div className="container">
                            <p className="footerTitle">컴퓨터공학과 졸업 프로젝트</p>

                            <p className="footerText">
                                문의사항 <MailOutlined /> mbti.developer@gmail.com
                            </p>
                </div>
        </div>
    )
}

export default Footer;
