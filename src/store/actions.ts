/* eslint-disable @typescript-eslint/no-explicit-any */
import * as types from "./types";

export const setCurrentModeAction = (mode: string | null) => ({
  type: types.SET_MODE,
  payload: mode,
});

export const setGeneratedQuizAction = (quiz: any) => ({
  type: types.SET_GENERATED_QUIZ,
  payload: quiz,
});

export const setCurrentRoundAction = () => ({
  type: types.SET_CURRENT_ROUND,
});

export const setStartGameAction = () => ({
  type: types.SET_START_GAME,
});

export const setPauseAction = () => ({
  type: types.SET_PAUSE,
});

export const setResumeAction = () => ({
  type: types.SET_RESUME,
});

export const setPointsAction = () => ({
  type: types.SET_POINTS,
});

export const setTimerAction = (timer: number) => ({
  type: types.SET_TIMER,
  payload: timer,
});

export const setResetGameAction = () => ({
  type: types.SET_RESET_GAME,
});
