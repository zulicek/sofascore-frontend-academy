import React from "react";

export function Header({onClick}) {
  return (
    <div className="accordion-header" onClick={onClick}>
        <h2 className="title">bulbasaur</h2>
        <div className="icon">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
    </div>       
  );
}
