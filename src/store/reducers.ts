import { combineReducers } from "redux";
import * as types from "./types";

const currentMode = (state = null, action: any) => {
  switch (action.type) {
    case types.SET_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ currentMode });
