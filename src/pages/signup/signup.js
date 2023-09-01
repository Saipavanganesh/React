import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundooImage from '../../images/Fundoo.png';
import googleImage from '../../images/googleimagelogo.png';
import { Link } from 'react-router-dom';
import './signup.css';
import { Checkbox, FormHelperText } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const SignupForm = () => {

    return (
        <div className='cover'>
            <div className="in-box">
                <img className='fundooImage'
                    src={fundooImage}
                    width='300vw'
                    alt='Fundoo'
                />
                <div className="im">
                    <img className='gimg'
                        src={googleImage}
                        width='14%'
                        alt='Google Image'
                    />
                </div>
                <h1 className='google-account-text'>Create your Fundoo Account</h1>
                <p className='google-account-text'>or use your google account</p>
                <div className='name'>

                    <div className='sign'><TextField className='sup' id="firstname" label="First name" variant="outlined" required /></div>

                    <div className='sign'><TextField className='sup' id="lastname" label="Last name" variant="outlined" required /></div>
                </div>

                <div className='sign'><TextField className='supEmail' id="email" label="Email" variant="outlined" required /></div>

                <p className='email-comment'>You can use letter, numbers & periods</p>
                <div className='name'>

                    <div className='sign'><TextField className='sup' id="password" type='Password' label="Password" variant="outlined" required /></div>

                    <div className='sign'><TextField className='sup' id="password" type='Password' label="Confirm Password" variant="outlined" required /></div>

                </div>
                <p className='password-comment'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                <span className='sp-box'><FormControlLabel control={<Checkbox />} label="Show Password" /></span>
                
                <div className='login-and-button'>
                    <div className='anchor'><Link className='span-text' to='/login'>Sign in instead</Link>
                    </div>
                    <div className='sign'><Button className='submit-signup' variant="contained">Register</Button></div>
                </div>
            </div>
        </div>
    );
};
export default SignupForm