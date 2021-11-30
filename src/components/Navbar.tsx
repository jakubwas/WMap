import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles";

export const StyledNavigationBar = styled.nav`
  background: rgb(0, 31, 63);
  height: 7vh;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.dL1} {
    height: 7vh;
    min-height: 4rem;
  }
`;
export const StyledAppTitle = styled.h1`
  font-size: 2.4rem;
  margin-left: 2rem;
  color: rgb(255, 255, 255);
  font-family: "Montserrat", sans-serif;
`;
export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 100%;
  margin-right: 1.2rem;
  cursor: pointer;

  @media ${device.dL1} {
    width: 4rem;
  }
`;
export const StyledLine = styled.div`
  width: 100%;
  height: 0.2rem;
  margin: 0.3rem 0;
  background: rgb(255, 255, 255);

  @media ${device.dL1} {
    height: 0.3rem;
    margin: 0.4rem 0;
  }
`;

const Navbar = () => (
  <StyledNavigationBar>
    <StyledAppTitle>wMap</StyledAppTitle>
    <Link to="/settings">
      <StyledBurger>
        <StyledLine />
        <StyledLine />
      </StyledBurger>
    </Link>
  </StyledNavigationBar>
);

export default Navbar;
