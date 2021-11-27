import React from "react";
import styled from "styled-components";

const StyledLeftSidebarContainer = styled.div`
  width: 20vw;
  height: 100%;
  border: 1px solid black;
`;

const LeftSidebar = () => (
  <StyledLeftSidebarContainer>Left Sidebar</StyledLeftSidebarContainer>
);

export default LeftSidebar;
