import React from "react";
import { StyledContainer } from "./MainContainer.styles";

const MainContainer = (props: any) => (
  // eslint-disable-next-line react/destructuring-assignment
  <StyledContainer>{props.children}</StyledContainer>
);
export default MainContainer;
