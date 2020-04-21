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
import {UserProfile} from "./modules/UserProfile/UserProfile";
import {MainHeader} from "./components/MainHeader/MainHeader";

import data from "./leagues"

export function App() {
  return (
      <>
        <Router>
          <MainHeader />
          <Switch>
              <Route path="/myleagues">
                <UserLeagues />
              </Route>
              <Route path="/profile">
                <UserProfile />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/logout">
                <LoginForm />
              </Route>
              <Route path="/register">
                <RegisterForm />
              </Route>
              <Route path="/">
                <Leagues />
              </Route>
            </Switch>
        </Router>    
      </>
  )
}

