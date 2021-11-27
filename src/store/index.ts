import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";

const rootReducer = reducers;

const composeEnhancers = composeWithDevTools({ trace: true });

export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers());
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
