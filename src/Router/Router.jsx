import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from '../pages/login/login';
import SignupForm from '../pages/signup/signup';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/Dashboard';


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<AuthRoute><LoginForm /></AuthRoute>} />
                    <Route exact path={"/signup"} element={<AuthRoute><SignupForm /></AuthRoute>} />
                    <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router