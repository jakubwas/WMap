import React from "react";

import styled from "styled-components";
import Timer from "./Timer";
import InfoHeader from "./InfoHeader";
import RoundAndScoreContent from "./RoundAndScoreContent";

const RightSidebarContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9rem;
  text-align: center;
`;

const RightSidebar = (props) => {
  return (
    <RightSidebarContainer>
      <Timer
        isActive={props.isActive}
        setIsActive={props.setIsActive}
        currentNumber={props.currentNumber}
        setCurrentNumber={props.setCurrentNumber}
        resetTimer={props.resetTimer}
        setResetTimer={props.setResetTimer}
      />
      <Container>
        <InfoHeader>Score</InfoHeader>
        <RoundAndScoreContent fontSize="4rem">
          {props.points}
        </RoundAndScoreContent>
      </Container>
      <Container>
        <InfoHeader>Round</InfoHeader>
        {props.currentNumber === 11 || props.currentNumber === 0 ? (
          <RoundAndScoreContent fontSize="4rem">-</RoundAndScoreContent>
        ) : (
          <RoundAndScoreContent fontSize="1.4rem">
            <span style={{ fontSize: "4rem" }}>{props.currentNumber}</span> / 10
          </RoundAndScoreContent>
        )}
      </Container>
    </RightSidebarContainer>
  );
};

export default RightSidebar;
