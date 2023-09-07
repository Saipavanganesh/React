import { Outlet, Navigate } from "react-router-dom";
import React from 'react';

const AuthRoute = ({children}) => {
    if(localStorage.getItem("token") === undefined || localStorage.getItem("token") === null){
        console.log("k");
        return children;
    }
    console.log("m")
    return <Navigate to = "/dashboard" />;
    console.log("l")
}

export default AuthRoute;