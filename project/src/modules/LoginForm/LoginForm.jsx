import React, { useState, useCallback } from "react";
import "./LoginForm.scss";
import { Logo } from "./../../components/Logo/Logo";
import { Button } from "./../../components/Button/Button";
import { Input } from "./../../components/Input/Input";
import { PasswordInput } from "./../../components/Input/PasswordInput";
import { login } from "./../../api/repository";

export function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState();

  const handleUsernameChange =  useCallback((newName) => {
    setUsername(newName);
  });

  const handlePasswordChange = useCallback((newPassword) => {
    setPassword(newPassword);
  });

  const validateForm = () => {
    let validForm = true;
    setErrors({});

    if (!username) {
      validForm = false;
      setErrors(prevErrors => ({
        ...prevErrors,
        username: "Username can't be empty"
      }));
    }

    if (!password) {
      validForm = false;
      setErrors(prevErrors => ({
        ...prevErrors,
        password: "Password can't be empty"
      }));
    }
    return validForm;
  };

  const onLogin = e => {
    e.preventDefault();

    if (validateForm()) {
      login({
        username: username,
        password: password
      })
        .then(response => {
          if (response.error) {
            setErrors(prevErrors => ({
              ...prevErrors,
              credentials: "Wrong credentials. Try again."
            }));
          } else {
            setUser(response.user);
            alert(`Bok ${response.user.username}!`);
          }
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={onLogin}>
        <Logo />
        <h1 className="form-title">Log in</h1>
        <Input
          name="Username"
          icon="fa fa-user"
          type="text"
          onChange={handleUsernameChange}
        />
        <div className="error">{errors.username}</div>

        <PasswordInput
          name="Password"
          icon="fa fa-lock"
          onChange={handlePasswordChange}
        />
        <div className="error">{errors.password}</div>

        <div className="error-wrapper">
          <div className="error">{errors.credentials}</div>
        </div>
        <Button type="inverse" />
      </form>
    </div>
  );
}
