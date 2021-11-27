import * as types from "./types";

export const setCurrentModeAction = (mode: string | null) => ({
  type: types.SET_MODE,
  payload: mode,
});
