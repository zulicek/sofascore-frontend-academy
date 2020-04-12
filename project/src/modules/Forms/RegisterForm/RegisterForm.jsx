import React, { useState, useCallback } from "react";
import "./../Form.scss";
import "./RegisterForm.scss";
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { useInputChange } from "../../../utils/UseInputChange";

export function RegisterForm() {
  const [username, handleUsernameChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");
  const [firstName, handleFirstNameChange] = useInputChange("");
  const [lastName, handleLastNameChange] = useInputChange("");
  const [birthday, handleBirthdayChange] = useInputChange("");
  const [gender, handleGenderChange] = useInputChange("");
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

    if (!firstName) {
      validForm = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name can't be empty",
      }));
    }

    if (!lastName) {
      validForm = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name can't be empty",
      }));
    }

    if (!birthday) {
      validForm = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthday: "Birthday can't be empty",
      }));
    }

    if (!gender) {
      validForm = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: "Gender can't be empty",
      }));
    }
    return validForm;
  };

  const onRegister = (e) => {
    e.preventDefault();

   /*  const errors = useValidateRequiredFields([
      { identifier:"username", text: "Username", value: username},
      { identifier:"password", text: "Password", value: password},
      { identifier:"firstName", text: "First name", value: firstName},
      { identifier:"lastName", text: "Last name", value: lastName},
      { identifier:"birthday", text: "Birthday", value: birthday},
      { identifier:"gender", text: "Gender", value: gender}
    ]); */
    


    if (validateForm()) {
      alert("bok" + username);
      /* register({
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
        .catch((error) => console.log(error)); */
    }
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
            <div className="show-password" onClick={toggleShowPassword}>
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
        <Button type="inverse" label="Register" />
      </form>
    </div>
  );
}
