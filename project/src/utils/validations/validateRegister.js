import { validateCredentials } from './validateCredentials.js'

export const validateRegister = (
  username,
  password,
  firstName,
  lastName,
  birthday,
  gender
) => {

  const errors = { ...validateCredentials(username, password) }

  if (!firstName) {
    errors.firstName = "First name can't be empty";
  }

  if (!lastName) {
    errors.lastName = "Last name can't be empty";
  }

  if (!birthday) {
    errors.birthday = "Birthday can't be empty";
  }

  if (!gender) {
    errors.gender = "Gender can't be empty";
  }

  return errors;
};
