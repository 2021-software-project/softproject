import React, {Component} from 'react';
import {Link} from'react-router-dom';


class Home extends Component {

    render(){
        return(
            <div>
                <h1>This is Home Component</h1>
                <Link to="/input_mbti">
                    체험하기 >>
                </Link>

                <Link to="/login">
                    입장하기  >>
                </Link>
            </div>
        )
    }
}

export default Home
