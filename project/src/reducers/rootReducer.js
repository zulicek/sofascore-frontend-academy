import { combineReducers } from "redux";
import { persistedSessionReducer } from "./sessionReducer";

export const rootReducer = combineReducers({
    session: persistedSessionReducer
  });
