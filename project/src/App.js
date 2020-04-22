import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import { Leagues } from "./modules/Leagues/Leagues";
import { LoginForm } from "./modules/Forms/LoginForm/LoginForm";
import { RegisterForm } from "./modules/Forms/RegisterForm/RegisterForm";
import { UserProfile } from "./modules/UserProfile/UserProfile";
import { Events } from "./modules/Events/Events";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { useCookies } from "react-cookie";

import data from "./leagues";

export function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/logout">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <ProtectedRoute path="*">
            <MainHeader />
          </ProtectedRoute>
        </Switch>
      </main>
      <main className="app-main">
        <Switch>
          <ProtectedRoute exact path="/">
            <Leagues />
          </ProtectedRoute>
          <ProtectedRoute path="/events">
            <Events />
          </ProtectedRoute>
          <ProtectedRoute path="/profile">
            <UserProfile />
          </ProtectedRoute>
          <Route path="*">
            <h1>404 - page not found</h1>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

function ProtectedRoute({ children, ...routeProps }) {
  const [cookies] = useCookies(["token"]);
  const isLoggedIn = cookies.token !== "undefined";

  return isLoggedIn ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
