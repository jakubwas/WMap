import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { generateQuiz } from "../utils/generateQuiz";
import { setGeneratedQuizAction, setStartGameAction } from "../store/actions";
import Timer from "./Timer";

const StyledSidebarContainer = styled.div`
  width: 30rem;
  height: 100%;
  background: rgb(237, 237, 237);
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

const Sidebar = () => {
  const currentMode = useSelector((state: RootState) => state.currentMode);
  const currentGame = useSelector((state: RootState) => state.currentGame);
  const { round, generatedQuiz, points } = currentGame;
  const dispatch = useDispatch();

  useEffect(() => {
    const quiz = generateQuiz(currentMode);
    dispatch(setGeneratedQuizAction(quiz));
  }, [currentMode, dispatch]);

  const startGameHandler = () => {
    dispatch(setStartGameAction());
  };

  return (
    <StyledSidebarContainer>
      <StyledSideNote>{currentMode}</StyledSideNote>
      <button type="submit" onClick={startGameHandler}>
        Start
      </button>
      <Timer />
      <h1>Round: {round + 1}</h1>
      <h1>Score: {points}</h1>
      {round !== -1 && <h1>Find {generatedQuiz[round].name}</h1>}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
