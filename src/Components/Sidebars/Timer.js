import React, { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import InfoHeader from "./InfoHeader";

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
const countdownAnimation = keyframes`
from {
    stroke-dashoffset: 0px;
    stroke: rgb(0, 31, 63);
  }
  to {
    stroke-dashoffset: 220px;
    stroke: rgb(255, 0, 0);
  }
`;
const Circle = styled.circle`
  stroke-dasharray: 220px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 5px;
  stroke: rgb(0, 31, 63);
  fill: none;
  animation: ${countdownAnimation} 15s linear ${(props) => props.startStop};
`;
const SecondsDisplay = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  color: rgb(0, 0, 0);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      <InfoHeader>Time</InfoHeader>
      <div style={{ position: "relative" }}>
        {props.currentNumber === 11 || props.currentNumber === 0 ? (
          <SecondsDisplay fontSize="4rem">{seconds}</SecondsDisplay>
        ) : (
          <SecondsDisplay fontSize="2rem">{seconds}</SecondsDisplay>
        )}

        <Svg>
          <Circle startStop={startStop} r="35" cx="50" cy="50"></Circle>
        </Svg>
      </div>
    </ClockContainer>
  );
};

export default Timer;
