import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {
        googleSignIn,
        setUser
    } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';

    // call google login function
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url);
            })
    };

    return (
        <div style={{height: '64vh'}} className="d-flex justify-content-center align-items-center my-5">
            <div style={{ boxShadow: "0px 0px 8px 0px #ddd", borderRadius: '20px',lineHeight: '6',padding: '60px' }} className=" text-center text-capitalize">
                <h3>for accessing to this site</h3>
                <button
                    onClick={handleGoogleLogin}
                    style={{ background: '#12C1AD', outline: 'none', width: '260px' }}
                    className="btn px-2 rounded-pill border-0 text-white">
                    Login With Google 
                </button>
            </div>
        </div>
    );
};

export default Login;