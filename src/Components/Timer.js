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
    const [seconds, setSeconds] = useState(15);
    const reset = () => {
        props.setIsActive(false);
        setTimeout(() => {
            setSeconds(15);
            props.setIsActive(true);
            props.setCurrentNumber(props.currentNumber + 1);
        }, 1500);
    };

    useEffect(() => {
        if (props.resetTimer) {
            setSeconds(15)
            props.setResetTimer(false);
        }
        if (seconds === 0) {
            reset();
            return;
        }
        let interval = null;
        if (props.isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (!props.isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.isActive, seconds]);

    return (
        <ClockContainer>
            <h1>Time: </h1>
            <div style={{ fontSize: "3rem", padding: "2rem" }}>{seconds}</div>
        </ClockContainer>
    );
};

export default Timer;
