/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setTimerAction } from "../store/actions";

const Settings = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.settings.timer);

  return (
    <div>
      <h1>Timer (seconds per round): {timer} s</h1>
      <input
        type="range"
        name="timer"
        value={timer}
        id="timer"
        min={5}
        max={30}
        step={5}
        onChange={(e: any) => {
          dispatch(setTimerAction(e.target.value));
        }}
      />
    </div>
  );
};

export default Settings;
