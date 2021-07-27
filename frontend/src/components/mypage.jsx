import React from 'react';
import GoodBad from './MyPage/GoodBad_list';
import {Link} from "react-router-dom";

class Mypage extends React.Component{
    render() {
        return (
            <div>
                <h1>마이페이지</h1>
                <fieldset>
                    <legend>메뉴</legend>
                    <Link to="MyInfo_edit">
                    회원정보수정
                    </Link><br></br>
                    <Link to="GoodBad_list">
                    좋아요/싫어요 목록보기
                    </Link><br></br>
                    <Link to="Rating_list">
                    평가목록보기
                </Link>
                </fieldset>
            </div>
        )
    }
}
export default Mypage
