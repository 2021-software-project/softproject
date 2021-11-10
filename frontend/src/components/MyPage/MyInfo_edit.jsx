import React from 'react';
import PasswordUpdate from "./PasswordUpdate";
import UserName from "./UserName";

class MyInfo extends React.Component{
    render() {
        return (
            <div className="my_container2" >
                 <div className="point_box " id="password_con-1">
                     <div className ="inner_box">
                     <h2>내정보 수정</h2>
                        <UserName /> 회원님,
                     <p></p>

                        <PasswordUpdate />
                     </div>
                </div>
            </div>
        )
    }
}

export default MyInfo