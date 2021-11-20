import React  from 'react';
import Axios from 'axios';
import PasswordResetComplete from './PasswordResetComplete'

class PasswordReset extends React.Component {
    state= {
        params: this.props.match.params,
        success: false,
        uid: '',
        token: ''
    };
  	componentDidMount() {
        this.state.params = this.props.match.params;

        Axios.get(`/user/password-reset/${this.state.params.uid}/${this.state.params.token}`)
            .then(res => {
                const data = res.data
                if (data.success) {
                    this.setState({uid:data.uid})
                    this.setState({token:data.token})
                    this.setState({success:data.success})
                }
            })
            .catch(err => {
                alert("만료된 인증입니다.");
                window.location.href = '/'
            })
    }
    render() {
  	    const {success,uid,token} = this.state
        return (success? <PasswordResetComplete uid={uid} token={token} />:<></>)
    }
}

export default PasswordReset;