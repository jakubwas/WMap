import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 93vh;
  background: white;
`;

interface ComponentProps {
  children: ReactChild | ReactChildren;
}

const AppContainer = (props: ComponentProps) => (
  <StyledContainer>{props.children}</StyledContainer>
);
export default AppContainer;
