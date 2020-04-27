import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import {rootReducer} from "../reducers/rootReducer";
import { persistStore } from 'redux-persist'

export const store = createStore(rootReducer, applyMiddleware(logger))

export const persistor = persistStore(store)
