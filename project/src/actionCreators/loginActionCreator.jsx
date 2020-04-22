import {fetchStarted, fetchSuccessful, fetchFailed} from "../actions/loginActions";
import { login } from "../api/repository";

export function loginUser(username, password) {
    
    return async function (dispatch) {
      dispatch(fetchStarted())

      await login({
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.error) {
            dispatch(fetchFailed(response.error))
          } else {
            return dispatch(fetchSuccessful(response))
          }
        })
        .catch((error) => dispatch(fetchFailed(error)))
    }
  }