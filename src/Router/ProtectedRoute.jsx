import { Outlet, Navigate } from "react-router-dom";
 import React, { Children } from 'react';
import { changeSectionValueFormat } from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";

 const ProtectedRoute = ({Children}) => {
    if(localStorage.getItem("token")){
        return Children;
    }
    return <Navigate to = "/" />
 };

 export default ProtectedRoute;