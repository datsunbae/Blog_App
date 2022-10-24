import React, { useState } from "react";
import "./InputForm.scss";

const InputForm = (props) => {
  const { id, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  
  const handleBlur = (e) => {
    console.log(inputProps.value)
    const inputPassword = document.querySelector('input[name="password"');
    if(inputPassword.value === "") {
      console.log(123)
      const inputConfirmPassword = document.querySelector('input[name="confirmPassword"');
      inputConfirmPassword.setAttribute("focused", false);
    }
    console.log(inputPassword)
    setFocused(true);

    
  }
  return (
    <div className="input-form">
      <input {...inputProps} onChange={onChange} focused={focused.toString()} onBlur={handleBlur}></input>
      <span className="input-from__err-msg">{errorMessage}</span>
    </div>
  );
};

export default InputForm;
