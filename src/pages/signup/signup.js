import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fundooImage from "../../images/Fundoo.png";
import googleImage from "../../images/googleimagelogo.png";
import { Link } from "react-router-dom";
import "./signup.css";
import { Checkbox, FormHelperText } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const SignupForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const validateForm = () => {};

  const handleClick = () => {
    console.log(user);
    alert("User Registration Successful");
    setUser({
      ...user,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="total-page">
      <div className="in-box">
        <div className="sign-up">
          <form>
            <div className="fundoo-logo">
              <img className="fundoo-image" src={fundooImage} alt="Fundoo" />
              <h1 className="google-account-text">
                Create your Fundoo Account
              </h1>
              <p className="google-account-text">or use your google account</p>
            </div>
            <div className="name">
              <div className="text-box">
                <TextField
                  className="outlined-basic"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  onChange={handleInput}
                  value={user.firstName}
                  required
                />
              </div>
              <div className="text-box">
                <TextField
                  className="outlined-basic"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  onChange={handleInput}
                  value={user.lastName}
                  required
                />
              </div>
            </div>
            <div className="email">
              <TextField
                className="email-text-box"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleInput}
                value={user.email}
                required
              />
              <p className="email-comment">
                You can use letter, numbers & periods
              </p>
            </div>
            <div className="name">
              <div className="text-box">
                <TextField
                  className="outlined-basic"
                  name="password"
                  label="Password"
                  variant="outlined"
                  onChange={handleInput}
                  type="Password"
                  value={user.password}
                  required
                />
              </div>
              <div className="text-box">
                <TextField
                  className="outlined-basic"
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  onChange={handleInput}
                  type="Password"
                  value={user.confirmPassword}
                  required
                />
              </div>
            </div>
            <div className="checkbox-button">
              <p className="password-comment">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
              <FormControlLabel control={<Checkbox />} label="Show Password" />
            </div>
            <div className="login-and-button">
              <div className="anchor">
                <Link className="span-text" to="/login">
                  Sign in instead
                </Link>
              </div>
              <div className="sign">
                <Button
                  className="submit-signup"
                  variant="contained"
                  onClick={handleClick}
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="google-logo-box">
          <img className="gimg" src={googleImage} alt="Google Image" />
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
