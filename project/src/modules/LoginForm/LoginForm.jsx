import React from "react";
import "./LoginForm.scss";
import { Logo } from "./../../components/Logo/Logo";
import { Button } from "./../../components/Button/Button";

export function LoginForm() {
  return (
    <div class="login-wrapper">
      <form>
        <Logo />
        <h1 className="form-title">Log in</h1>
        <div className="input-wrapper">
          <input type="text" name="username" placeholder="Username" />
          <i className="fa fa-user" aria-hidden="true"></i>
          <label for="username">Username</label>
        </div>
        <div className="input-wrapper">
          <input type="password" name="pass" placeholder="Password" />
          <i className="fa fa-lock" aria-hidden="true"></i>
          <label for="password">Password</label>
        </div>
        <Button type="inverse" />
      </form>
    </div>
  );
}
