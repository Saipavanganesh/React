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
        <div className="total-page">
            <div className="in-box">
                <div className="sign-up">
                    <div className="fundoo-logo">
                        <img className='fundoo-image'
                            src={fundooImage}
                            alt='Fundoo'
                        />
                        <h1 className='google-account-text'>Create your Fundoo Account</h1>
                        <p className='google-account-text'>or use your google account</p>
                    </div>
                    <div className="name">
                        <div className='text-box'>
                            <TextField className="outlined-basic" label="First Name" variant="outlined" required />
                        </div>
                        <div className='text-box'>
                            <TextField className="outlined-basic" label="Last Name" variant="outlined" required />
                        </div>
                    </div>
                    <div className="email">
                        <TextField className="email-text-box" label="Email" variant="outlined" required />
                        <p className='email-comment'>You can use letter, numbers & periods</p>
                    </div>
                    <div className="name">
                        <div className='text-box'>
                            <TextField className="outlined-basic" label="Password" variant="outlined" required />
                        </div>
                        <div className='text-box'>
                            <TextField className="outlined-basic" label="Confirm Password" variant="outlined" required />
                        </div>
                    </div>
                    <div className="checkbox-button">
                        <p className='password-comment'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <FormControlLabel control={<Checkbox />} label="Show Password" />

                    </div>
                    <div className='login-and-button'>
                        <div className='anchor'><Link className='span-text' to='/login'>Sign in instead</Link>
                        </div>
                        <div className='sign'><Button className='submit-signup' variant="contained">Next</Button></div>
                    </div>
                </div>
                <div className="google-logo-box">
                    <img className='gimg'
                        src={googleImage}
                        alt='Google Image'
                    />

                </div>
            </div>
        </div>
    );
};
export default SignupForm