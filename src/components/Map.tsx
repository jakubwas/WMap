import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import EuropeMapSVG from "./EuropeMapSVG";
import { setPauseAction, setResumeAction } from "../store/actions";

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
  const dispatch = useDispatch();

  const mapClickHandler = () => {
    dispatch(setPauseAction());
    setTimeout(() => {
      dispatch(setResumeAction());
    }, 2000);
  };

  return (
    <StyledMapContainer isActive={isActive}>
      <EuropeMapSVG onClickHandler={mapClickHandler} />
    </StyledMapContainer>
  );
};

export default Map;
