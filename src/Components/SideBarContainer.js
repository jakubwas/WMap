import React, { Fragment } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import PlayButton from "./Buttons/PlayButton";

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

const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 20%;
    border-bottom: 0.8rem solid black;
`;

const SideBarContainer = (props) => {
    const toggle = () => {
        props.setIsActive(!props.isActive);
    };

    const startGame = () => {
        toggle();
        props.setCurrentNumber(1);
        props.setDisplayDescription("none");
    };

    const playAgain = () => {
        props.setPoints(0);
        props.setCurrentNumber(1);
    };

    return (
        <Container>
            <SideNote>Can you name the US States ?</SideNote>
            <FindContainer>
                {props.currentNumber !== 0 && props.currentNumber !== 11 && (
                    <Fragment>
                        <h1 style={{ textAlign: "center", fontWeight: "400" }}>
                            Find: <Find>{props.find}</Find>
                        </h1>
                        <h2>Round : {props.currentNumber}/10</h2>
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
            <Score>
                <h1>Score: </h1>
                <h1 style={{ marginTop: "2rem" }}>
                    <div
                        style={{
                            fontSize: "3.5rem",
                            color: `${props.currentNumber === 11 ? "blue" : "black"}`,
                        }}
                    >
                        {props.points} {props.currentNumber === 11 ? "/ 10" : null}{" "}
                    </div>
                </h1>
            </Score>
            <Timer
                isActive={props.isActive}
                setIsActive={props.setIsActive}
                currentNumber={props.currentNumber}
                setCurrentNumber={props.setCurrentNumber}
                resetTimer={props.resetTimer}
                setResetTimer={props.setResetTimer}
            />
        </Container>
    );
};

export default SideBarContainer;
