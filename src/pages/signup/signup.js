import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'
import fundooImage from '../../images/Fundoo.png';
import { Link } from 'react-router-dom';
// import googleImage from '../../images/googleimage.png';


const SignupForm = () => {
    return (
        <div className='cover'>
            <img
            src={fundooImage}
            width= '300vw'
            alt='Fundoo'
            />
            {/* <img className='gimg'
            src={googleImage}
            width= '30%'
            alt='Google Image'
            /> */}
            <h1>Create your Fundoo Account</h1>
            <p className='google-account-text'>or use your google account</p>
            <div className='name'>
                <div className='sign'><TextField className='sup' id="firstname" label="First name" variant="outlined" /></div>

                <div className='sign'><TextField className='sup' id="lastname" label="Last name" variant="outlined" /></div>
            </div>
            <div className='sign'><TextField className='supEmail' id="email" label="Email" variant="outlined" /></div>
            <p className='email-comment'>You can use letter, numbers & periods</p>
            <div className='name'>
                <div className='sign'><TextField className='password' id="password" type='Password' label="Password" variant="outlined" /></div>
                <div className='sign'><TextField className='dob' id="dob" type='Date' variant="outlined" /></div>
                
            </div>
            <p className='password-comment'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <div className='login-and-button'>
                <div className='anchor'><Link className='span-text' to='/login'>Sign in instead</Link>
                </div>
                <div className='sign'><Button className='submit-signup' variant="contained">Register</Button></div>
            </div>
        </div>
    )
}

export default SignupForm