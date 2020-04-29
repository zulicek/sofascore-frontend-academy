import React from "react";
import "./Input.scss";

export function Input({ name, icon, type, onChange, iconDecoration, value, checked }) {
  return (
    <div className="input-wrapper">
      <input
        id={name}
        type={type}
        name={name}
        placeholder={name}
        value={value}
        checked={checked}
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
      />
      {icon && <i className={icon} aria-hidden="true"></i>}
      <label id={name} htmlFor={name}>{name}</label>
      {iconDecoration}
    </div>
  );
}
