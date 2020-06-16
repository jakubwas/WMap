import React, { Fragment } from "react";
import styled from "styled-components";
import PlayButton from "./Buttons/PlayButton";
import generateQuiz from "./Maps/generateQuiz";

const Container = styled.div`
    width: 35rem;
    height: 100%;
    border-right: 0.8rem solid black;
`;

const SideNote = styled.h2`
    margin-top: 3rem;
    color: black;
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
    border-bottom: 0.8rem solid black;
    min-height: 30%;
`;

const Find = styled.div`
    font-size: 3.4rem;
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
                    <h1 style={{ textAlign: "center", fontWeight: "400" }}>
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
        </Container>
    );
};

export default SideBarContainer;
