import React from 'react';
import PasswordUpdate from "./PasswordUpdate";
import UserName from "./UserName";

class MyInfo extends React.Component{
    render() {
        return (
            <div>
                 <h2>내정보 수정</h2>
                <UserName />
                <PasswordUpdate />
            </div>
        )
    }
}

export default MyInfo