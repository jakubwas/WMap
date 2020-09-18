import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 12rem;
  margin-top: 1.2rem;
  color: rgb(244, 0, 0);
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const WrongAnswer = (props) => {
  return <Container>{props.children}</Container>;
};

export default WrongAnswer;
