import {fetchStarted, fetchSuccessful, fetchFailed} from "../actions/loginActions";
import { login } from "../api/repository";

export function loginUser(username, password, setCookie, setErrors) {
    
    return async function (dispatch) {
      dispatch(fetchStarted())

      await login({
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
            const userData = response
            setCookie("token", userData.token);

            return dispatch(fetchSuccessful(userData))
          }
        })
        .catch((error) => dispatch(fetchFailed(error)))
    }
  }