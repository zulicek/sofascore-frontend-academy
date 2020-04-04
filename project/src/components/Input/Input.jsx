import React from "react";
import './Input.scss';

export function Input({ name, icon, type, onChange }) {
  return (
    <div className="input-wrapper">
      <input type={type} name={name} placeholder={name} onChange={event => {
        onChange(event.currentTarget.value);
      }}/>
      <i className={icon} aria-hidden="true"></i>
      <label htmlFor={name}>{name}</label>
  </div>
  );
}
