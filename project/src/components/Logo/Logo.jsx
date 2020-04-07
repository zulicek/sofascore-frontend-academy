import React from "react";
import "./Logo.scss";

export function Logo() {
  return (
    <span className="logo-wrapper">
      <div className="logo">
        <div className="square border-black"></div>
        <div className="square background-black"></div>
        <div className="square border-white"></div>
      </div>
    </span>
  );
}
