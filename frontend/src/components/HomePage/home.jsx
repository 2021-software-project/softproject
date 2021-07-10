import React, {Component} from 'react';
import {Link} from'react-router-dom'

class Home extends Component {
    render(){
        return(
            <div>
                <h1>This is Home Component</h1>
                <Link to="/info">
                    MBTI별 추천 받기 >>
                </Link>
            </div>
        )
    }
}

export default Home
