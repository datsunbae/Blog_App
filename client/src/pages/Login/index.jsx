import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../components/InputForm';
import { AuthContext } from '../../context/AuthContext';
import "./Login.scss";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    }
  ];

  const {login} = useContext(AuthContext);

  const [error, setError] = useState();
  const navigate = useNavigate();
 
  const onChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      await login(value);
      navigate("/");
    }
    catch(err) {
      setError(err.response.data);
    }
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
          {error && <span className="auth__err-msg">{error}</span>}
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