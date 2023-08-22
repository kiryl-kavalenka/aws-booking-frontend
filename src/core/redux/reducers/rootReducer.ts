import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import loginReducer from './loginReducer';
// import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  //   error: errorReducer
  events: eventsReducer,
  login: loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
