import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import { Leagues } from "./modules/Leagues/Leagues";
import { LoginForm } from "./modules/Forms/LoginForm/LoginForm";
import { RegisterForm } from "./modules/Forms/RegisterForm/RegisterForm";
import { UserProfile } from "./modules/UserProfile/UserProfile";
import { Events } from "./modules/Events/Events";
import { MainNav } from "./components/MainNav/MainNav";
import { useSelector, connect } from "react-redux";
import { logout } from "./actionCreators/sessionActionCreators";
import { useDispatch } from "react-redux";
import { checkTokenRequest } from "./api/repository";

export function App() {
  const dispatch = useDispatch();
  const { user, keepLoggedIn, token } = useSelector((state) => state.session);

  const checkToken = () => {
    checkTokenRequest({
      token: token
    })
      .then((response) => {
        if (response.error) {
          dispatch(logout());
        } 
      })
      .catch(() => {
        dispatch(logout());
      });
  }

  useEffect(() => {
    checkToken()
  }, [token])

  useEffect(() => {
    if (keepLoggedIn) {
      checkToken();
    } else {
      dispatch(logout());
    }
  }, []);

  return (
    <BrowserRouter>
      <main className={`${token ? "app-main" : ""}`}>
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
          <ProtectedRoute path="/events">
            <Events />
          </ProtectedRoute>
          <ProtectedRoute path="/profile">
            <UserProfile />
          </ProtectedRoute>
          <ProtectedRoute exact path="/">
            <Leagues />
          </ProtectedRoute>
          <Route path="*">
            <h1>404 - page not found</h1>
          </Route>
        </Switch>
        <Switch>
          <ProtectedRoute path="*">
            <MainNav />
          </ProtectedRoute>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

function ProtectedRoute({ children, ...routeProps }) {
  const token = useSelector((state) => state.session.token);

  return token ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
