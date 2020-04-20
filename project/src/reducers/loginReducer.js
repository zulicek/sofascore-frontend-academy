import { FETCH_STARTED, FETCH_SUCCESSFUL, FETCH_FAILED } from "../actions/loginActions";
import { initialState } from "../initialState";

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, isLoading: true, error: null }

    case FETCH_SUCCESSFUL:
      return { ...state, isLoading: false, error: null, user: action.user }

    case FETCH_FAILED:
      return { ...state, isLoading: false, error: action.error, user: null }

    default:
      return state
  }
}