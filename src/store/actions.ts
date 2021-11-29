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

export const setCurrentRoundAction = (round: number) => ({
  type: types.SET_CURRENT_ROUND,
  payload: round,
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
