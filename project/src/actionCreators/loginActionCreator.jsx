import {fetchStarted, fetchSuccessful, fetchFailed} from "../actions/loginActions";

export function loginUser(username, password) {
    return async function (dispatch) {
      dispatch(fetchStarted())
  
      try {
        const response = await fetch('https://private-leagues-api.herokuapp.com/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })
  
        if (response.status > 299) {
          throw Error('Invalid response')
        }
  
        const userData = await response.json()
  
        return dispatch(fetchSuccessful(userData))
      } catch (e) {
        return dispatch(fetchFailed(e))
      }
    }
  }