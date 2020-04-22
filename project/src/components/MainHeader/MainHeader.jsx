import React from "react";
import "./MainHeader.scss";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useBoolean } from "../../utils/customHooks/UseBoolean";

export function MainHeader() {
  const [isOpen, toggleOpen] = useBoolean();
  return (
    <>
      <header className={`${isOpen ? "opened" : ""}`}>
        <NavLink to="/profile">
          <Logo />
        </NavLink>
        <div className="name username">ivanhorvat</div>
        <div className="name">Ivan Horvat</div>
        <nav role="navigation">
          <ul>
            <li>
              <NavLink to="/">Leagues</NavLink>
            </li>
            <li>
              <NavLink to="/">Events</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <div className="logout">
              <NavLink
                to="/logout"
                onClick={() => {
                  window.location = "/login";
                }}
              >
                Log out
              </NavLink>
            </div>
          </ul>
          
        </nav>
        <div id="mainnav-toggle" onClick={toggleOpen}>
          <span className="hamburger"></span>
        </div>
      </header>
    </>
  );
}
