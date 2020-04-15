import React from "react";
import "./App.scss";
import { Homework6 } from './modules/Homework6';
import { RegisterForm } from './modules/Forms/RegisterForm/RegisterForm';
import { LoginForm } from "./modules/Forms/LoginForm/LoginForm";

export function App() {
  return (
      <>
       {/* <Homework6 /> */}
       <RegisterForm />
      {/*  <LoginForm/> */}
      </>
  )
}

