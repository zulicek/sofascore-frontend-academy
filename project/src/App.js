import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import { Leagues } from "./modules/Leagues/Leagues";
import { LoginForm } from "./modules/Forms/LoginForm/LoginForm";
import { RegisterForm } from "./modules/Forms/RegisterForm/RegisterForm";
import { UserProfile } from "./modules/UserProfile/UserProfile";
import { Events } from "./modules/Events/Events";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { useSelector, connect } from "react-redux";
import { logout } from "./actionCreators/sessionActionCreators"
import { useDispatch } from "react-redux";
import { checkTokenRequest } from "./api/repository";

export function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const keepLoggedIn = useSelector(state => state.session.keepLoggedIn)
  const token = useSelector(state => state.session.token) 

  if (!user && !keepLoggedIn && !sessionStorage.getItem('keepLoggedIn')) {
    dispatch(logout());
  } else {
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
          <ProtectedRoute path="*">
            <h1>404 - page not found</h1>
          </ProtectedRoute>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

function _ProtectedRoute({ children, ...routeProps }) {
  const token = useSelector(state => state.session.token) 
  
  return token ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}

function mapStateToProps(state) {
  return { user: state.user }
}


const ProtectedRoute = connect(mapStateToProps)(_ProtectedRoute)