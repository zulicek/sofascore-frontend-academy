import React, { useCallback } from "react";
import "./MainNav.scss";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useBoolean } from "../../utils/customHooks/UseBoolean";
import { useDispatch } from "react-redux";
import { logout } from "../../actionCreators/sessionActionCreators";

export function MainNav() {
  const [isOpen, toggleOpen] = useBoolean();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

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
              <NavLink exact to="/">
                <i className="fa fa-trophy" aria-hidden="true"></i>
                <div>Leagues</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/events">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <div>Events</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <i className="fa fa-user" aria-hidden="true"></i>
                <div>Profile</div>
              </NavLink>
            </li>
            <li className="logout" onClick={onLogout}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <span>Log out</span>
            </li>
          </ul>
        </nav>
        <div id="mainnav-toggle" onClick={toggleOpen}>
          <span className="hamburger"></span>
        </div>
      </header>
    </>
  );
}
