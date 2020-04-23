import React, { useState , useEffect} from "react";
import "./../Form.scss";
import "./RegisterForm.scss";
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { useInputChange } from "../../../utils/customHooks/UseInputChange";
import { useBoolean } from "../../../utils/customHooks/UseBoolean";
import { validateRegister } from "./../../../utils/validations/validateRegister.js";
import { isObjectEmpty } from "./../../../utils/helpers.js";
import { registerRequest } from "../../../api/repository";
import { Link } from "react-router-dom";

export function RegisterForm() {
  const [username, handleUsernameChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");
  const [firstName, handleFirstNameChange] = useInputChange("");
  const [lastName, handleLastNameChange] = useInputChange("");
  const [birthday, handleBirthdayChange] = useInputChange("");
  const [gender, handleGenderChange] = useInputChange("");
  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState();
  const [show, toggleShow] = useBoolean(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted && isObjectEmpty(errors)) {
      registerRequest({
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.error) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              credentials: response.error,
            }));
          } else {
           setUserId(response.id);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [errors]);

  const onRegister = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setErrors(
      validateRegister(
        username,
        password,
        firstName,
        lastName,
        birthday,
        gender
      )
    );
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onRegister}>
        <Logo />
        <h1 className="form-title">Register</h1>
        <Input
          name="Username"
          icon="fa fa-user-circle"
          type="text"
          onChange={handleUsernameChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}

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
        {errors.password && <div className="error">{errors.password}</div>}

        <div className="two-col">
          <div className="col">
            <Input
              name="First name"
              icon="fa fa-user"
              type="text"
              onChange={handleFirstNameChange}
            />
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>

          <div className="col">
            {" "}
            <Input
              name="Last name"
              icon="fa fa-user"
              type="text"
              onChange={handleLastNameChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>

        <div className="label-inline ">
          <i className="fa fa-birthday-cake" aria-hidden="true"></i>
          <label>Birthday</label>
          <Input type="date" onChange={handleBirthdayChange} />
          
          {errors.birthday && <div className="error">{errors.birthday}</div>}
        </div>

        <div className="label-inline radios">
          <i className="fa fa-venus-mars" aria-hidden="true"></i>
          <label>Gender</label>
          <Input
            name="Male"
            type="radio"
            value="Male"
            onChange={handleGenderChange}
            checked={gender === "Male"}
          />
          <Input
            name="Female"
            type="radio"
            value="Female"
            onChange={handleGenderChange}
            checked={gender === "Female"}
          />
        </div>
        {errors.gender && <div className="error">{errors.gender}</div>}

        {errors.credentials && (
          <div className="error-wrapper">
            <div className="error">{errors.credentials}</div>
          </div>
        )}
        <Button type="inverse">Register</Button>
        <p className="auth-link">You already have an account? Log in <Link to="/login">here</Link>.</p>
      </form>
    </div>
  );
}