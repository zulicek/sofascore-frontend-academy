import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
import {Leagues} from "./modules/Leagues/Leagues"
import {UserLeagues} from "./modules/UserLeagues/UserLeagues"
import {LoginForm} from "./modules/Forms/LoginForm/LoginForm";
import {RegisterForm} from "./modules/Forms/RegisterForm/RegisterForm";

import data from "./leagues"

export function App() {
  return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/">Leagues</Link>
                </li>
                <li>
                  <Link to="/myleagues">My leagues</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/myleagues">
                <UserLeagues />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/register">
                <RegisterForm />
              </Route>
              <Route path="/">
                <Leagues />
              </Route>
            </Switch>
          </div>
        </Router>
        
      </>
  )
}

