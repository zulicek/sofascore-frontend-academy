import React, { useState } from "react";
import "./Input.scss";
import { Input } from "./Input";

export function PasswordInput({ name, icon, onChange }) {
  const [show, setShow] = useState(false);

  const toggleShowPassword = () => {
    setShow(!show);
  };

  return (
    <div className="input-wrapper">
      <input
        type={show ? "text" : "password"}
        name={name}
        placeholder={name}
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
      />
      <i className={icon} aria-hidden="true"></i>
      <label htmlFor={name}>{name}</label>
      <div className="show-password" onClick={toggleShowPassword}>
        <i className="fa fa-eye" aria-hidden="true"></i>
        <span className="tooltip">Show password</span>
      </div>
    </div>
  );
}
