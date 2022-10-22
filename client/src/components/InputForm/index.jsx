import React, { useState } from "react";
import "./InputForm.scss";

const InputForm = (props) => {
  const { id, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleBlur = () => {
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
