import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 93vh;
  background: white;
`;

const MainContainer = (props) => {
  return <Container>{props.children}</Container>;
};
export default MainContainer;
