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
  isActive: false,
  generatedQuiz: null,
  round: -1,
};
const currentGame = (state = currentGameInitState, action: any) => {
  switch (action.type) {
    case types.SET_GENERATED_QUIZ:
      return {
        ...state,
        generatedQuiz: action.payload,
      };
    case types.SET_CURRENT_ROUND:
      return {
        ...state,
        round: action.payload.round,
      };
    case types.SET_START_GAME:
      return {
        ...state,
        isActive: true,
        round: 0,
      };
    default:
      return state;
  }
};

export default combineReducers({ currentMode, currentGame });
