import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
`;

const Timer = (props) => {
    const [seconds, setSeconds] = useState(3);
    const reset = () => {
        props.setIsActive(false);
        setTimeout(() => {
            setSeconds(3);
            props.setIsActive(true);
            props.setCurrentNumber(props.currentNumber + 1);
        }, 1500);
    };

    useEffect(() => {
        if (seconds === "-") {
            setSeconds(3);
        }
        let interval = null;
        if (props.currentNumber === 11) {
            setSeconds("-");
        } else if (props.resetTimer) {
            setSeconds(3);
            props.setResetTimer(false);
        } else if (seconds === 0) {
            reset();
        } else if (props.isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    });

    return (
        <ClockContainer>
            <h1 style={{ marginTop: "2rem" }}>Time: </h1>
            <div style={{ fontSize: "3rem", padding: "2rem" }}>{seconds}</div>
        </ClockContainer>
    );
};

export default Timer;
