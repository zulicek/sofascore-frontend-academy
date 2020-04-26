import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


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


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
}
  
export const persistedSessionReducer = persistReducer(persistConfig, sessionReducer);