import { combineReducers } from "redux";
import { countersManagerReducer } from "../pages/CounterCountersWithRedux/reducers/reducers";

export const rootReducer = combineReducers({
  countersManagerPage: countersManagerReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
