import React, { ReactChild } from "react";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  background-color: #fcfcfc;

  .effect {
    display: inline-flex;
    color: #003163;
    border: solid 2px #003163;
    border-radius: 1.4rem;
    position: relative;
    transition-duration: 0.4s;
    overflow: hidden;
  }

  .effect::before,
  .effect span {
    margin: 0 auto;
    transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    transition-duration: 0.4s;
  }

  .effect:hover {
    background-color: rgb(36, 49, 163);
  }

  .effect:hover span {
    -webkit-transform: translateY(-400%) scale(-0.1, 20);
    transform: translateY(-400%) scale(-0.1, 20);
  }

  .effect::before {
    content: attr(data-sm-link-text);
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-transform: translateY(500%) scale(-0.1, 20);
    transform: translateY(500%) scale(-0.1, 20);
  }

  .effect:hover::before {
    -webkit-transform: translateY(0) scale(1, 1);
    transform: translateY(0) scale(1, 1);
  }
`;
const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fcfcfc;
  margin: 4rem 0rem;
  width: 24rem;
`;
const StyledBtn = styled.div`
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 4.5rem;
  max-width: 16rem;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  background: white;
`;

interface ComponentProps {
  onClick: () => void;
  backText: string;
  children: ReactChild;
}

const PlayButton = (props: ComponentProps) => (
  <StyledMainContainer>
    <StyledButtonContainer>
      <StyledBtn
        onClick={props.onClick}
        className="effect"
        data-sm-link-text={props.backText}
      >
        <span>{props.children}</span>
      </StyledBtn>
    </StyledButtonContainer>
  </StyledMainContainer>
);

export default PlayButton;
