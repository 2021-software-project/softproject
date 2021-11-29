import React  from 'react';
import Axios from 'axios';
import PasswordResetComplete from './PasswordResetComplete'

class PasswordReset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: true,
            uid: props.match.params.uid,
            token: props.match.params.uid
        }
    }

    render() {
  	    const {success,uid,token} = this.state

        return (success? <PasswordResetComplete uid={uid} token={token} />:<div>다시 시도해주세요</div>)
    }
}

export default PasswordReset;