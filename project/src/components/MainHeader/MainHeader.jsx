import React from "react";
import "./MainHeader.scss";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export function MainHeader() {
  const [cookies, removeCookie] = useCookies(["token"]);
  return (
    <header>
      <nav>
        <ul>
          {cookies.token !== 'undefined' &&
            <>
              <li>
                <Link to="/">Leagues</Link>
              </li>
              <li>
                <Link to="/myleagues">My leagues</Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  onClick={() => {
                      removeCookie("token");
                      window.location = "/login";
                  }}
                >
                  Log out
                </Link>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
}
