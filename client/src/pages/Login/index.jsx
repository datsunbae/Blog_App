import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <div className="auth">
          <span className="login-box__title">SIGN IN</span>
          <form>
            <input type="text" placeholder="Email or phone"></input>
            <input type="password" placeholder="Password"></input>
            <span>Forgot password?</span>
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