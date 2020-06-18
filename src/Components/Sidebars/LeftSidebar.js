import React, { Fragment } from "react";
import styled from "styled-components";
import PlayButton from "../Buttons/PlayButton";
import generateQuiz from "../Maps/generateQuiz";
import CountriesInfoSidebar from "./CountriesInfoSidebar";

const RightSidebarContainer = styled.div`
    width: 35rem;
    height: 100%;
    border-right: 0.8rem solid black;
    background: #001f3f;
`;

const SideNote = styled.h2`
    margin-top: 3rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-rigt: 1rem;
    border-bottom: 0.8rem solid black;
`;

const FindContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 24%;
    background: #001f3f;
    border-bottom: 0.8rem solid black;
    margin-bottom: 3rem;
`;

const FindHeading = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    color: rgb(255, 255, 255);
`;

const FindCountryName = styled.div`
    font-size: 2.9rem;
    letter-spacing: 0.4rem;
    color: rgba(255, 255, 255, 0.9);
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
            <SideNote>
                {props.svgFlagPath === "USFlags" ? (
                    props.sideNoteMessage
                ) : (
                    <Fragment>
                        Can you name all countries <br /> in {props.sideNoteMessage} ?
                    </Fragment>
                )}
            </SideNote>
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
