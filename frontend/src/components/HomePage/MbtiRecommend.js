import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function MbtiRecommend(){

    const [auth,setAuth] = useState()
     useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true);
        }
    }, [])

    return(
        <div>
            mbti based recommand page<br/>
            { auth ?
                <Link to="/main">
                    see more...
                </Link>
                :
                <Link to="/signup">
                    see more...
                </Link>
            }
        </div>
    )
}

export default MbtiRecommend;