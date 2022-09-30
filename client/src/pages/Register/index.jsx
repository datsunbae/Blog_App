import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register-box">
        <div className="auth">
          <span className="register-box__title">SIGN UP</span>
          <form>
          <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email or phone"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Repeat password"></input>
            <button className="btn-register">Register</button>
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