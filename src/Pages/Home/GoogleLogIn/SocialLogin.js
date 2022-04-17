import React from 'react';
import googleIcon from '../../../images/google.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/home";

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    };

    if (user) {
        navigate(from, { replace: true })
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div className='button-styling'>
                <button onClick={() => signInWithGoogle()}
                    >
                    <img src={googleIcon} alt="" />
                    <span className='px-3'>Sing In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;