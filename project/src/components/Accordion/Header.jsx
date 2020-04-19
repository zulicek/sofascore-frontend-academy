import React from "react";

export function Header({ onClick, isOpen, name, type, startDate, location, surface }) {
  return (
    <div className="accordion-header" onClick={onClick}>
      <h2 className="title">{name}</h2>
      <h2 className="title">{type}</h2>
      <h2 className="title">{startDate}</h2>
      <h2 className="title">{location}</h2>
      <h2 className="title">{surface}</h2>
      <div className={`icon${isOpen && " opened"}`}>
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
