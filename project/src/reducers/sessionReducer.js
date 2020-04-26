import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


export const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      !action.keepLoggedIn && sessionStorage.setItem('keepLoggedIn',action.keepLoggedIn);
      return { ...state, user: action.user, token: action.token, keepLoggedIn: action.keepLoggedIn };
    case "LOGOUT":
      sessionStorage.removeItem('keepLoggedIn');
      return { ...state, user: null, token: null, keepLoggedIn: false,};
    default:
      return state;
  }
};


const persistConfig = {
    key: 'session',
    storage,
    whitelist: ['token', 'keepLoggedIn'],
}
  
export const persistedSessionReducer = persistReducer(persistConfig, sessionReducer);