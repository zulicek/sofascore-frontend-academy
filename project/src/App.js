import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import "./App.scss";
import { Leagues } from "./modules/Leagues/Leagues";
import { UserLeagues } from "./modules/UserLeagues/UserLeagues";
import { LoginForm } from "./modules/Forms/LoginForm/LoginForm";
import { RegisterForm } from "./modules/Forms/RegisterForm/RegisterForm";
import { UserProfile } from "./modules/UserProfile/UserProfile";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { useCookies } from "react-cookie";

import data from "./leagues";

export function App() {
  const [cookies] = useCookies(["token"]);
  const isLoggedIn = cookies.token !== "undefined";

  return (
    <BrowserRouter>
      <MainHeader />
      <main>
        <Switch>
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/leagues">
            <Leagues />
          </ProtectedRoute>
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/myleagues">
            <UserLeagues />
          </ProtectedRoute>
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
            <UserProfile />
          </ProtectedRoute>
          <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/">
            <h1>home</h1>
          </ProtectedRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/logout">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="*">
            <h1>404 - page not found</h1>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

function ProtectedRoute({ children, isLoggedIn, ...routeProps }) {
  return isLoggedIn ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
