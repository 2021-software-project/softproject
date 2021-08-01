import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, ...rest }) {

    const showMessage = () => {
        alert('로그인 후 이용 부탁드립니다 ');
        document.location.href = '/login'
      };

    return (
        <Route
            {...rest}
            render = {props =>
                localStorage.getItem('token')?(
                    <Component {...props} />
                ) : (
                    <
                        Redirect to={{
                                    pathname: '/login',
                                    state: {from: props.location}
                                  }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;