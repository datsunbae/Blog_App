import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../../components/InputForm';
import "./Login.scss";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  console.log(value);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    }
  ];


  const onChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login">
      <div className="login-box">
        <div className="auth">
          <span className="login-box__title">SIGN IN</span>
          <form onSubmit={handleSubmit}>
            {inputs.map(input => (
              <InputForm {...input} onChange={onChange}/>
            ))}
            <Link to="/" className="login-box_forgot-pw">Forgot password?</Link>
            <button className="btn-login">Login</button>
          </form>
          <span className="login-box__register">
            Don't have an account? <Link to="/register" className="login-box__register-link">Sign up</Link>
          </span>
        </div>
        <div className="img-wrapper">
          <img src="https://cdn.dribbble.com/userupload/2678846/file/original-4f78b72764dfc08952151eb5105a8f36.jpg?compress=1&resize=1024x1024" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login