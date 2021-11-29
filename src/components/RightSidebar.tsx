import React from "react";
import styled from "styled-components";
import Timer from "./Timer";

const StyledRightSidebarContainer = styled.div`
  width: 10vw;
  height: 100%;
  border: 1px solid black;
`;

const RightSidebar = () => (
  <StyledRightSidebarContainer>
    <Timer />
  </StyledRightSidebarContainer>
);

export default RightSidebar;
