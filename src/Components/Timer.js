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
    const [seconds, setSeconds] = useState("-");
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
            setSeconds("-");
        } else if (props.resetTimer) {
            setSeconds(15);
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
            <h1 style={{ marginTop: "3rem" }}>Time: </h1>
            <div
                style={{
                    fontSize: "8rem",
                    fontWeight: '700',
                    padding: "2rem",
                    color: '#001f3f'
                }}
            >
                {seconds}
            </div>
        </ClockContainer>
    );
};

export default Timer;
