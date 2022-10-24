import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.scss";
import axios from 'axios';
import InputForm from '../../components/InputForm';

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      pattern: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      pattern: values.password,
      required: true,
    }
  ];

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("/auth/register", values);
      navigate("/login")
    }catch(err) {
      setError(err.response.data);
    }
  }

  return (
    <div className="register">
      <div className="register-box">
        <div className="auth">
          <span className="register-box__title">SIGN UP</span>
          <form onSubmit={handleSubmit}>
            {inputs.map(input => (
              <InputForm {...input} onChange={handleChange} value={values[input.name]}></InputForm>
            ))}
            <button className="btn-register">Register</button>
          </form>
          {error && <span className="auth__err-msg">{error}</span>}
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