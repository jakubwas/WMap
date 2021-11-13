import React, { ReactChildren, ReactChild } from "react";
import { StyledContainer } from "./MainContainer.styles";

interface ComponentProps {
  children: ReactChild | ReactChildren;
}

const MainContainer = (props: ComponentProps) => (
  <StyledContainer>{props.children}</StyledContainer>
);
export default MainContainer;
