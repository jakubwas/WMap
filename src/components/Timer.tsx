/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { setCurrentRoundAction } from "../store/actions";

const StyledSecondsHeader = styled.div`
  font-size: 25px;
`;

const Timer = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.currentGame.isActive,
  );
  const currentRound = useSelector(
    (state: RootState) => state.currentGame.round,
  );

  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    if (isActive) {
      let x = 0;
      setSeconds(15);
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        if (++x === 15) {
          window.clearInterval(interval);
          setSeconds(15);
          dispatch(setCurrentRoundAction(currentRound + 1));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, currentRound]);

  return <StyledSecondsHeader>{seconds}</StyledSecondsHeader>;
};

export default Timer;
