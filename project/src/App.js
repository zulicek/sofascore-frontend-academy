import React, { useState} from "react";
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
import { useBoolean } from "./utils/customHooks/UseBoolean";
import { Loader } from "./components/Loader/Loader";

export function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const keepLoggedIn = useSelector(state => state.session.keepLoggedIn)

  if (!user && !keepLoggedIn && !sessionStorage.getItem('keepLoggedIn')) {
    dispatch(logout());
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
  const [isLoading, setIsLoading] = useBoolean(false);
  const [errors, setErrors] = useState({});
  const token = useSelector(state => state.session.token) 
  let isAuthorized = false;
  let checkedToken = false;

  if (token && !checkedToken) {
    checkTokenRequest({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyIiwiaWQiOiI1ZTg3MjZlN2JhYWU5NjQzNjFjODA0NTYiLCJpYXQiOjE1ODc5MDkzNzIsImV4cCI6MTU4OTcyMzc3MiwiaXNzIjoicHJpdmF0ZS1sZWFndWVzLWFwaSJ9.NWwvct9FIhbVSyRTbsXEBqgzuQhcLNsYVQQvNXnBsGo"
    })
      .then((response) => {
        console.log(response)
        if (response.error) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            token: "Wrong token. Try again.",
          }));
          isAuthorized = false;
        } else {
          isAuthorized = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  checkedToken = true; 

  console.log(checkedToken, isAuthorized, token)
  
  return checkedToken && isAuthorized && token ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}

function mapStateToProps(state) {
  return { user: state.user }
}


const ProtectedRoute = connect(mapStateToProps)(_ProtectedRoute)
