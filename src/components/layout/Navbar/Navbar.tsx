import React from "react";
// import { Link } from "react-router-dom";
import {
  StyledNavigationBar,
  StyledAppTitle,
  StyledBurger,
  StyledLine,
} from "./Navbar.styles";

const Navbar = () => (
  <StyledNavigationBar>
    <StyledAppTitle>wMap</StyledAppTitle>
    {/* <Link to="/About"></Link> */}
    <StyledBurger>
      <StyledLine />
      <StyledLine />
    </StyledBurger>
  </StyledNavigationBar>
);

export default Navbar;
