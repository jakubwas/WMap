/* eslint-disable @typescript-eslint/no-explicit-any */
import * as types from "./types";

const currentGameInitState = {
  currentMode: null,
  isActive: false,
  generatedQuiz: null,
  round: -1,
  points: 0,
};
const reducer = (state = currentGameInitState, action: any) => {
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

export default reducer;
