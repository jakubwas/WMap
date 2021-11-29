import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { generateQuiz } from "../utils/generateQuiz";
import { setGeneratedQuizAction } from "../store/actions";

const StyledLeftSidebarContainer = styled.div`
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

const LeftSidebar = () => {
  const currentMode = useSelector((state: RootState) => state.currentMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const quiz = generateQuiz(currentMode);
    dispatch(setGeneratedQuizAction(quiz));
  }, [currentMode, dispatch]);

  return (
    <StyledLeftSidebarContainer>
      <StyledSideNote>{currentMode}</StyledSideNote>
    </StyledLeftSidebarContainer>
  );
};

export default LeftSidebar;
