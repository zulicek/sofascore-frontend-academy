import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import {rootReducer} from "./reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['session'],
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))

export const persistor = persistStore(store)
