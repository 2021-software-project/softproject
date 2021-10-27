import React from 'react';
import PasswordUpdate from "./PasswordUpdate";
import UserName from "./UserName";

class MyInfo extends React.Component{
    render() {
        return (
            <div id ="my_container2" >
                 <div id="password_con-1">
                 <h2>내정보 수정</h2>
                <UserName /> 회원님,
                     <p></p>

                     </div>
                <PasswordUpdate />

            </div>
        )
    }
}

export default MyInfo