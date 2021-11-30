import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { currentGame, settings } from "./reducers";

const rootReducer = combineReducers({ currentGame, settings });

const persistConfig = {
  key: "root",
  storage: storageSession,
  blacklist: ["currentGame"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({ trace: true });

export default function configureStore() {
  const store = createStore(persistedReducer, composeEnhancers());
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
