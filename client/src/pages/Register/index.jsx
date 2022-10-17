import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.scss";
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/auth/register", inputs);
    }catch(err) {

    }
  }

  console.log(inputs)

  return (
    <div className="register">
      <div className="register-box">
        <div className="auth">
          <span className="register-box__title">SIGN UP</span>
          <form>
          <input type="text"  name="username" placeholder="User name" onChange={handleChange}></input>
            <input type="text" name="email" placeholder="Email or phone" onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
            <button onClick={handleSubmit} className="btn-register">Register</button>
          </form>
          <span className="register-box__register">
           Already have an account? <Link to="/login" className="register-box__register-link">Sign in</Link>
          </span>
        </div>
        <div className="img-wrapper">
          <img src="https://cdn.dribbble.com/userupload/3076971/file/original-e06876f0e46482a660afc3059a53d952.png?compress=1&resize=1024x768" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register