import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundooImage from '../../images/Fundoo.png';
import './login.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className='loginPage'>
            <div className="log-box">
                <img
                    src={fundooImage}
                    width='300vw'
                    alt='Fundoo'
                />
                <h1>Login to your Fundoo Account</h1>
                <div className='log'><TextField className="cred" label="Email" variant="outlined" required /></div>
                <div className='log'><TextField className="cred" type='Password' label="Password" variant="outlined" required /></div>
                <div className='forgot-password'><Link className='span-text' to='/forgot-password'>Forgot Password</Link>
                </div>
                <div className='signup-and-button'>
                    <div className='anchor'><Link className='span-text' to='/signup'>Create Account</Link>
                    </div>
                    <div className='log'><Button className='submit-login' variant="contained">Log In</Button></div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm