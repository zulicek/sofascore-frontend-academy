import React, { useState, useEffect } from "react";
import "./../Form.scss";
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { login } from "../../../api/repository";
import { useInputChange } from "../../../utils/customHooks/UseInputChange";
import { useBoolean } from '../../../utils/customHooks/UseBoolean';
import { validateCredentials } from "./../../../utils/validations/validateCredentials.js";
import { isObjectEmpty } from "./../../../utils/helpers.js";


export function LoginForm() {
  const [username, handleUsernameChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState();
  const [show, toggleShow] = useBoolean(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted && isObjectEmpty(errors)) {
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
  }, [errors]);

  const onLogin = (e) => {
    e.preventDefault();
    setSubmitted(true)
    setErrors(validateCredentials(username, password));
  }  

  return (
    <div className="form-wrapper">
      {console.log(errors)}
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
            <div className="show-password" onClick={toggleShow}>
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span className="tooltip">Show password</span>
            </div>
          }
        />
        <div className="error">{errors.password}</div>

        <div className="error-wrapper">
          <div className="error">{errors.credentials}</div>
        </div>
        <Button type="inverse">Log in</Button>
      </form>
    </div>
  );
}
