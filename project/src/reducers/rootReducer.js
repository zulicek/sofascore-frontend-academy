import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducer";

export const rootReducer = combineReducers({
    session: sessionReducer
  });
