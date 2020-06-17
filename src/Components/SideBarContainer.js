import React from "react";
import styled from "styled-components";
import PlayButton from "./Buttons/PlayButton";
import generateQuiz from "./Maps/generateQuiz";
import CountriesInfoSidebar from "../Components/CountriesInfoSidebar";

const Container = styled.div`
    width: 35rem;
    height: 100%;
    border-right: 0.8rem solid black;
    background: #001f3f;
`;

const SideNote = styled.h2`
    margin-top: 3rem;
    color: white;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 3rem;
    border-bottom: 0.8rem solid black;
`;

const FindContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 30%;
    background: #001f3f;
`;

const Find = styled.div`
    font-size: 3.4rem;
    letter-spacing: 0.2rem;
    color: rgb(36, 49, 235);
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
`;

const SideBarContainer = (props) => {
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
        <Container>
            <SideNote>{props.sideNoteMessage}</SideNote>
            <FindContainer>
                {props.currentNumber !== 0 && props.currentNumber !== 11 && (
                    <h1 style={{ textAlign: "center", fontWeight: "400", color: "white" }}>
                        Find: <Find>{props.find}</Find>
                    </h1>
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
        </Container>
    );
};

export default SideBarContainer;
