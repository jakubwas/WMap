import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 12rem;
  margin-top: 1.2rem;
  color: red;
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const WrongAnswer = (props) => {
  return <Container>{props.children}</Container>;
};

export default WrongAnswer;
