import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
    return (
        <div className='logCover'>
            <h1>Login</h1>
            <div className='sign' id='email'><TextField className='supEmail' id="email" label="Email" variant="outlined" /></div>
            <div className='sign' id='password'><TextField className='sup' id="password" type='Password' label="Password" variant="outlined" /></div>
            <div className='sign' id='button'><Button className='submit-signup' variant="contained">Register</Button></div>
        </div>
    )
}

export default LoginForm