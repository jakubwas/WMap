/* eslint-disable @typescript-eslint/no-explicit-any */
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

const currentGameInitState = {
  generatedQuiz: null,
};
const currentGame = (state = currentGameInitState, action: any) => {
  switch (action.type) {
    case types.SET_GENERATED_QUIZ:
      return {
        ...state,
        generatedQuiz: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ currentMode, currentGame });
