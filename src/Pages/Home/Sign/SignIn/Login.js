import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../../GoogleLogIn/SocialLogin';


const Login = () => {
    const [error, setError] = useState()
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,

    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const hendelSubmit = event => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
        if (user?.password === password) {
            navigate('/home')
        }
        else {
            setError('Your Password is Worng');
        }
        if (user?.email === email) {
            navigate('/home')
        }
        else {
            setError('Your Email is Worng');
        }
    }


    const nevigateRegister = event => {
        navigate('/register')
    }
    return (
        <Form onSubmit={hendelSubmit} className='w-50 fix-from mx-auto my-5 p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <p> {error}</p>
            <p>Are You Fresher? <Link to='/register' className='text-primary text-decoration-none' onClick={nevigateRegister} > Click Register</Link></p>
            <button className='col-md-12 text-center fix-btn'>Login</button>


           <SocialLogin></SocialLogin>
        </Form>

    );
};

export default Login;