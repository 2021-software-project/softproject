import React, {Component} from 'react';
import {Link} from'react-router-dom';


class Home extends Component {

    state = {
        user : localStorage.getItem('user')
    }



    render(){
        return(
            <div>
                <span>{this.state.user}</span>
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
