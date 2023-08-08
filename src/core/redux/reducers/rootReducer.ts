import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
// import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  //   error: errorReducer
  events: eventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
