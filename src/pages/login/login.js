import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fundooImage from "../../images/Fundoo.png";
import "./login.css";
import { Link } from "react-router-dom";
import { signIn } from "../../services/DataServices";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const [errors, setErrors] = useState({
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    let emailTest = emailRegex.test(data.email);
    let passwordTest = passwordRegex.test(data.password);
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
    console.log(data);
    if(emailTest === passwordTest === true){
      let response = await signIn(data);
      console.log(response);
      setTimeout(() => {
        window.location.reload()
      }, 500);
      localStorage.setItem("token", response.data.data);
    }
  };
  return (
    <div className="big-box">
      <div className="login-page">
        <div className="fundoo">
          <img className="fundoo-logo" src={fundooImage} alt="Fundoo" />
          <h1>Login to your Fundoo Account</h1>
        </div>
        <div className="login-name">
          <div className="log">
            <TextField
              className="cred"
              label="Email"
              variant="outlined"
              required
              name="email"
              onChange={handleInput}
              value={data.email}
              error={errors.emailError}
              helperText={errors.emailHelper}
            />
          </div>
          <div className="log">
            <TextField
              className="cred"
              type="Password"
              label="Password"
              variant="outlined"
              required
              onChange={handleInput}
              name="password"
              value={data.password}
              error={errors.passwordError}
              helperText={errors.passwordHelper}
            />
          </div>
          <div className="forgot-password">
            <Link className="span-text" to="/forgot-password">
              Forgot Password
            </Link>
          </div>
        </div>
        <div className="signup-and-button">
          <div className="anchor">
            <Link className="span-text" to="/signup">
              Create Account
            </Link>
          </div>
          <div className="log">
            <Button
              className="submit-login"
              variant="contained"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
