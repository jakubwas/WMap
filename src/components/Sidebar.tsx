/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setStartGameAction } from "../store/actions";
import PlayButton from "./PlayButton";

const StyledSidebarContainer = styled.div`
  width: 30rem;
  height: 100%;
  background: #fcfcfc;
  position: relative;
  -webkit-box-shadow: 23px -2px 49px -24px rgba(66, 68, 90, 1);
  -moz-box-shadow: 23px -2px 49px -24px rgba(66, 68, 90, 1);
  box-shadow: 23px -2px 49px -24px rgba(66, 68, 90, 1);
`;
const StyledSideNote = styled.h2`
  margin-top: 3rem;
  color: rgb(0, 31, 63);
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 0.3rem solid black;
`;
const StyledLabel1 = styled.h1`
  font-size: 18px;
  text-align: center;
`;
const StyledLabel2 = styled.h2`
  font-size: 24px;
  text-align: center;
`;
const StyledLabel3 = styled.h2`
  font-size: 15px;
  text-align: center;
`;

const Sidebar = () => {
  const currentGame = useSelector((state: RootState) => state.currentGame);
  const { round, generatedQuiz, points, currentMode, isFinished } = currentGame;
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setStartGameAction());
  };

  return (
    <StyledSidebarContainer>
      <StyledSideNote>{currentMode}</StyledSideNote>
      <PlayButton
        onClick={startGameHandler}
        backText={isFinished ? "Play Again" : "Play"}
      >
        {isFinished ? "Play Again" : "Play"}
      </PlayButton>
      <div style={{ height: "35%" }}>
        {round !== -1 && !isFinished && (
          <StyledLabel2>{generatedQuiz[round].name}</StyledLabel2>
        )}
        {round !== -1 && !isFinished && (
          <StyledLabel3> {generatedQuiz[round].capital}</StyledLabel3>
        )}
        {round !== -1 && !isFinished && (
          <img
            style={{
              width: "100%",
              height: "150px",
              margin: "1.5rem 0 3rem 0",
            }}
            src={
              require(`../assets/${currentMode}/${generatedQuiz[round].name}.svg`)
                .default
            }
            alt="Flag"
          />
        )}
      </div>
      <StyledLabel1>
        Round: {round + 1} / {10}
      </StyledLabel1>
      <StyledLabel1>Score: {points}</StyledLabel1>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
