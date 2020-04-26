export const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.user, token: action.token };
    case "LOGOUT":
      return { ...state, user: null, token: null};
    default:
      return state;
  }
};
