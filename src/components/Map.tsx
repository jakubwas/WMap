/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { MemoizedMapEurope } from "./MapEurope";
import {
  setPauseAction,
  setResumeAction,
  setPointsAction,
  setCurrentRoundAction,
} from "../store/actions";
import Timer from "./Timer";

const StyledMapContainer = styled.div<{ isActive: boolean }>`
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: ${(props) => (props.isActive ? "all" : "none")};
`;

const Map = () => {
  const currentGame = useSelector((state: RootState) => state.currentGame);
  const { isActive, round, generatedQuiz } = currentGame;

  const dispatch = useDispatch();

  const mapClickHandler = (id: string) => {
    dispatch(setPauseAction());
    if (id === generatedQuiz[round].name) {
      dispatch(setPointsAction());
    }
    setTimeout(() => {
      dispatch(setCurrentRoundAction());
      if (round !== 9) {
        dispatch(setResumeAction());
      }
    }, 2000);
  };

  return (
    <StyledMapContainer isActive={isActive}>
      <Timer />
      <MemoizedMapEurope onClickHandler={mapClickHandler} />
    </StyledMapContainer>
  );
};

export default Map;
