import React from "react";
import './../components/Accordion/Accordion';
import { Accordion } from "./../components/Accordion/Accordion";
import { ModalWrapper } from "./../components/Modal/ModalWrapper";
import { RegisterForm } from "./Forms/RegisterForm/RegisterForm";
import { LoginForm } from "./Forms/LoginForm/LoginForm";

export function Homework6() {
  return (
    <>
        {/* <Accordion />
        <ModalWrapper /> */}
       {/*  <LoginForm /> */}
        <RegisterForm />
    </>
  );
}
