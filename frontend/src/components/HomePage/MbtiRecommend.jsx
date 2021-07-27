import React from 'react';
import {Link} from 'react-router-dom';
import MbtiJobs from "./MbtiJobs";



class MbtiRecommend extends React.Component{
    state = {
        mymbti : this.props.mbti,
        jobs :[]
    }
    render() {
        return (
            <div>
                <h1>mbti based recommand page</h1>
                <h2>MBTI : {this.state.mymbti}</h2>
                <MbtiJobs/>
                <Link to="/signup">
                    더 추천받기 !
                </Link>
            </div>
        )
    }

}

export default MbtiRecommend;