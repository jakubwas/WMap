/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import * as types from "./types";

const settingsInitState = {
  timer: 15,
};

export const settings = (state = settingsInitState, action: any) => {
  switch (action.type) {
    case types.SET_TIMER:
      return {
        ...state,
        timer: action.payload,
      };
    default:
      return state;
  }
};

const currentGameInitState = {
  currentMode: null,
  isActive: false,
  generatedQuiz: null,
  round: -1,
  points: 0,
};
export const currentGame = (state = currentGameInitState, action: any) => {
  switch (action.type) {
    case types.SET_MODE:
      return {
        ...state,
        currentMode: action.payload,
      };
    case types.SET_GENERATED_QUIZ:
      return {
        ...state,
        generatedQuiz: action.payload,
      };
    case types.SET_CURRENT_ROUND:
      if (state.round === 9) {
        return {
          ...state,
          isActive: false,
        };
      }
      return {
        ...state,
        round: state.round + 1,
      };
    case types.SET_START_GAME:
      return {
        ...state,
        isActive: true,
        round: 0,
      };
    case types.SET_PAUSE:
      return {
        ...state,
        isActive: false,
      };
    case types.SET_RESUME:
      return {
        ...state,
        isActive: true,
      };
    case types.SET_POINTS:
      return {
        ...state,
        points: state.points + 1,
      };

    default:
      return state;
  }
};

export default combineReducers({ settings, currentGame });
