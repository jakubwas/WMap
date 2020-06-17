import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ClockContainer = styled.div`
    width: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
`;
const Svg = styled.svg`
    display: block;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    transform: rotateY(-180deg) rotateZ(-90deg);
`;
const countdown = keyframes`
from {
    stroke-dashoffset: 0px;
    stroke: black;
  }
  to {
    stroke-dashoffset: 220px;
    stroke: red;
  }
`;
const Circle = styled.circle`
    stroke-dasharray: 220px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 5px;
    stroke: #001f3f;
    fill: none;
    animation: ${countdown} 15s linear ${(props) => props.startStop};
`;

const Timer = (props) => {
    const [seconds, setSeconds] = useState("-");
    const [startStop, setStartStop] = useState("paused");

    const reset = () => {
        props.setIsActive(false);
        setTimeout(() => {
            setSeconds(15);
            props.setIsActive(true);
            props.setCurrentNumber(props.currentNumber + 1);
        }, 1500);
    };

    useEffect(() => {
        if (seconds === "-" && props.isActive) {
            setSeconds(15);
        }
        let interval = null;
        if (props.currentNumber === 11) {
            setStartStop("paused");
            setStartStop("initial");
            setSeconds("-");
        } else if (props.resetTimer) {
            setStartStop("initial");
            setSeconds(15);
            props.setResetTimer(false);
        } else if (seconds === 0) {
            reset();
            setStartStop("initial");
        } else if (props.isActive) {
            setStartStop("running");
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    });

    return (
        <ClockContainer>
            <h1
                style={{
                    color: "#001f3f",
                }}
            >
                Time
            </h1>
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        fontSize: "2rem",
                        fontWeight: "600",
                        color: "#001f3f",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {seconds}
                </div>
                <Svg>
                    <Circle startStop={startStop} r="35" cx="50" cy="50"></Circle>
                </Svg>
            </div>
        </ClockContainer>
    );
};

export default Timer;
