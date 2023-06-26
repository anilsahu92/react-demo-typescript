import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReduser";
import getUserSlice from "./user/userReduser";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: getUserSlice,
});

export default rootReducer;
