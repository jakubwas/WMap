import React, { Fragment } from "react";
import styled from "styled-components";

import PlayButton from "../Buttons/PlayButton";
import generateQuiz from "../Maps/generateQuiz";
import CountriesInfoSidebar from "./CountriesInfoSidebar";

const RightSidebarContainer = styled.div`
  width: 35rem;
  height: 100%;
  background: rgb(237, 237, 237);
`;

const SideNote = styled.h2`
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

const FindContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 24%;
  background: rgb(237, 237, 237);
  border-bottom: 0.3rem solid black;
  margin-bottom: 3rem;
`;

const FindHeading = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  color: rgb(4, 0, 244);
`;

const FindCountryName = styled.div`
  font-size: 2.9rem;
  letter-spacing: 0.4rem;
  color: rgb(0, 0, 0);
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const LeftSidebar = (props) => {
  const startGame = () => {
    generateQuiz(props.countriesList, props.setGeneratedStates);
    props.setIsActive(true);
    props.setPoints(0);
    props.setCurrentNumber(1);
    props.setDisplayDescription("none");
  };

  const playAgain = () => {
    generateQuiz(props.countriesList, props.setGeneratedStates);
    props.setIsActive(true);
    props.setPoints(0);
    props.setCurrentNumber(1);
  };

  return (
    <RightSidebarContainer>
      <SideNote>{props.sideNoteMessage}</SideNote>
      <FindContainer>
        {props.currentNumber !== 0 && props.currentNumber !== 11 && (
          <Fragment>
            <FindHeading>Find</FindHeading>
            <FindCountryName>{props.find}</FindCountryName>
          </Fragment>
        )}
        {props.currentNumber === 11 && (
          <PlayButton backText="Start" onClick={playAgain}>
            Play Again
          </PlayButton>
        )}
        {props.currentNumber === 0 && (
          <PlayButton backText="Play" onClick={startGame}>
            Start Quiz
          </PlayButton>
        )}
      </FindContainer>
      <CountriesInfoSidebar
        svgFlagPath={props.svgFlagPath}
        generatedStates={props.generatedStates}
        currentNumber={props.currentNumber}
        countriesData={props.countriesData}
      />
    </RightSidebarContainer>
  );
};

export default LeftSidebar;
