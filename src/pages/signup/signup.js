import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'

const SignupForm = () => {
    return (
        <div className='cover'>
        <h1>Sign Up</h1>
        <p>with your google account</p>
        <div className='name'>
             <div className='sign 'id='firstname'><TextField className='sup' id="firstname" label="First name" variant="outlined" /></div>
             <div className='sign' id='lastname'><TextField className='sup' id="lastname" label="Last name" variant="outlined" /></div>
        </div>
        <div className='sign' id='email'><TextField className='supEmail' id="email" label="Email" variant="outlined" /></div>
           {/* <label>Date of Birth  <div className='sign' id='confirm-password'><TextField classame='sup' id="confirm-password" type='Date' variant="outlined" /></div></label> */}
        <div className='name'>
            <div className='sign' id='password'><TextField className='sup' id="password" type='Password' label="Password" variant="outlined" /></div>
            <div className='sign' id='confirm-password'><TextField classame='sup' id="confirm-password" type='Password' label="Confirm Password" variant="outlined" /></div>
        </div>
        <div className='sign' id='button'><Button className='submit-signup' variant="contained">Register</Button></div>
        </div>
    )
}



export default SignupForm