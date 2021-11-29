import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import EuropeMapSVG from "./EuropeMapSVG";

const StyledMapContainer = styled.div<{ isActive: boolean }>`
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: ${(props) => (props.isActive ? "all" : "none")};
`;

const Map = () => {
  const isActive = useSelector(
    (state: RootState) => state.currentGame.isActive,
  );

  return (
    <StyledMapContainer isActive={isActive}>
      <EuropeMapSVG />
    </StyledMapContainer>
  );
};

export default Map;
