import React from 'react';
import axios from 'axios';

export const signIn = async (obj) => {
    let response = await axios.post(
        // "https://localhost:44307/api/User/login",
        "https://fundooapp.azurewebsites.net/api/User/login",
        obj
    )
    return response;
}
export const signUp = async (obj) => {
    let response = await axios.post(
        "https://fundooapp.azurewebsites.net/api/User/registration",
        // "https://localhost:44307/api/User/registration",
        obj
    )
    return response;
}
