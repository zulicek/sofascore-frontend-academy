import React from "react";

export function Header({onClick, isOpen}) {
  return (
    <div className="accordion-header" onClick={onClick}>
        <h2 className="title">bulbasaur</h2>
        <div className={`icon${isOpen && ' opened'}`}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
    </div>       
  );
}
