import React from "react";
import "./MainHeader.scss";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";

export function MainHeader() {
  const [cookies, removeCookie] = useCookies(["token"]);
  return (
    <header>
      {cookies.token !== "undefined" && (
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/leagues">Leagues</NavLink>
          </li>
          <li>
            <NavLink to="/myleagues">My leagues</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              onClick={() => {
                removeCookie("token");
                window.location = "/login";
              }}
            >
              Log out
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}
