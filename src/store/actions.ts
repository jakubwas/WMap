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
