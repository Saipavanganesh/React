import React from 'react';
import SignupForm from './pages/signup/signup';
import LoginForm from './pages/login/login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <div>
    //   <SignupForm />
    //   {/* <LoginForm /> */}
    // </div>
    <Router>
      <Routes>
        <Route exact path="/signup" element = {<SignupForm />}> 
        </Route>
        <Route exact path="/login" element = {<LoginForm />}>     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
