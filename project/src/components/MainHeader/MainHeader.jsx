import React, { useCallback } from "react";
import "./MainHeader.scss";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useBoolean } from "../../utils/customHooks/UseBoolean";
import { useDispatch, connect } from "react-redux";
import { logout } from "../../actionCreators/sessionActionCreators";

function _MainHeader() {
  const [isOpen, toggleOpen] = useBoolean();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch])

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
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="logout"> 
              <span onClick={onLogout}>Log out</span>
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

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
}

export const MainHeader = connect(null, mapDispatchToProps)(_MainHeader);
