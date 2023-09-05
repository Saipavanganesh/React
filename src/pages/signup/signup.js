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

  const nameRegex = /^[a-zA-Z\s\-']+$/;
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

  const [errors, setErrors] = useState({
    firstNameError: false,
    firstNameHelper: "",
    lastNameError: false,
    lastNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const handleClick = () => {
    let firstNameTest = nameRegex.test(user.firstName);
    let lastNameTest = nameRegex.test(user.lastName);
    let emailTest = emailRegex.test(user.email);
    let passwordTest = passwordRegex.test(user.password);

    if (firstNameTest === false) {
      setErrors((prev) => ({
        ...prev,
        firstNameError: true,
        firstNameHelper: "Enter Correct Name",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        firstNameError: false,
        firstNameHelper: "",
      }));
    }

    if (lastNameTest === false) {
      setErrors((prev) => ({
        ...prev,
        lastNameError: true,
        lastNameHelper: "Enter Correct Name",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        lastNameError: false,
        lastNameHelper: "",
      }));
    }
    if (emailTest === false) {
      setErrors((prev) => ({
        ...prev,
        emailError: true,
        emailHelper: "Enter Correct Email",
      }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: false, emailHelper: "" }));
    }

    if (passwordTest === false) {
      setErrors((prev) => ({
        ...prev,
        passwordError: true,
        passwordHelper: "Enter Correct Password",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        passwordError: false,
        passwordHelper: "",
      }));
    }
    console.log(user);
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
              {/* First Name */}
              <div className="text-box">
                <TextField className="outlined-basic" name="firstName" label="First Name" variant="outlined" onChange={handleInput} value={user.firstName} required
                error={errors.firstNameError} helperText={errors.firstNameHelper}
                />
              </div>
              {/* Last Name */}
              <div className="text-box">
                <TextField className="outlined-basic" name="lastName" label="Last Name" variant="outlined" onChange={handleInput} value={user.lastName} required
                error={errors.lastNameError} helperText={errors.lastNameHelper}
                />
              </div>
            </div>
            {/* Email */}
            <div className="email">
              <TextField className="email-text-box" name="email" label="Email" variant="outlined" onChange={handleInput} value={user.email} required
              error={errors.emailError} helperText={errors.emailHelper}
              />
              <p className="email-comment">You can use letter, numbers & periods</p>
            </div>
            {/* Password */}
            <div className="name">
              <div className="text-box">
                <TextField className="outlined-basic" name="password" label="Password" variant="outlined" onChange={handleInput} type="Password" value={user.password} required error={errors.passwordError}
                  helperText={errors.passwordHelper} />
              </div>
              {/* Confirm Password */}
              <div className="text-box">
                <TextField className="outlined-basic" name="confirmPassword" label="Confirm Password" variant="outlined" onChange={handleInput} type="Password" value={user.confirmPassword}
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
