import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};
export const store = configureStore();
