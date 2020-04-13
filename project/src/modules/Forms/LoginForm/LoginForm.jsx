import React, { useState, useCallback } from "react";
import "./../Form.scss";
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { login } from "../../../api/repository";
import { useInputChange } from "../../../utils/UseInputChange";


export function LoginForm() {
  const [username, handleUsernameChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);

  const toggleShowPassword = useCallback(() => setShow(!show), []);

  const validateForm = () => {
    let validForm = true;
    setErrors({});

    if (!username) {
      validForm = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username can't be empty",
      }));
    }

    if (!password) {
      validForm = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password can't be empty",
      }));
    }
    return validForm;
  };

  const onLogin = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      login({
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.error) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              credentials: "Wrong credentials. Try again.",
            }));
          } else {
            setUser(response.user);
            alert(`Bok ${response.user.username}!`);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="form-wrapper">
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

        <Input
          name="Password"
          icon="fa fa-lock"
          type={show ? "text" : "password"}
          onChange={handlePasswordChange}
          iconDecoration={
            <div className="show-password" onClick={toggleShowPassword}>
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span className="tooltip">Show password</span>
            </div>
          }
        />
        <div className="error">{errors.password}</div>

        <div className="error-wrapper">
          <div className="error">{errors.credentials}</div>
        </div>
        <Button type="inverse" label="Log in"/>
      </form>
    </div>
  );
}
