import React, {Component} from 'react';
import {Link} from'react-router-dom';
import "../../css/styles.css";

class Home extends Component {

    state = {
        user : localStorage.getItem('user')
    }

    render(){
        return(
             <div>
                <span>{this.state.user}</span>
                <h1>This is Home Component</h1>
                <p></p>

                 <button className="btn btn-primary btn-xl" id="submitButton" type="submit"><Link to="/input_mbti">
                    체험하기 >>
                </Link></button>

                &nbsp; &nbsp;

                <button className="btn btn-primary btn-xl" id="submitButton" type="submit"><Link to="/login">
                    입장하기  >>
                </Link></button>
            </div>
        )
    }
}

export default Home
