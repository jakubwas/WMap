/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Timer = () => {
  const isActive = useSelector(
    (state: RootState) => state.currentGame.isActive,
  );
  const currentRound = useSelector(
    (state: RootState) => state.currentGame.round,
  );
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, currentRound]);

  return <div>{seconds}</div>;
};

export default Timer;
