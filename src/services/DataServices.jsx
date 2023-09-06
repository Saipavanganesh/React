import React from 'react';
import axios from 'axios';

export const signIn = async (obj) =>{
    let response = await axios.post(
        "https://localhost:44307/api/User/login",
        obj
    )
    return response;
}
export const signUp = async (obj) =>{
    let response = await axios.post(
        "https://localhost:44307/api/User/registration",
        obj
    )
    return response;
}