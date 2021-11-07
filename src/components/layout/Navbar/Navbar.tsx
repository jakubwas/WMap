import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar, AppTitle, Burger, Line } from "./Navbar.styles";

const Navbar = () => (
  <NavigationBar>
    <AppTitle>WMap</AppTitle>
    {/* <Link to="/About">
      <Burger>
        <Line />
        <Line />
      </Burger>
    </Link> */}
  </NavigationBar>
);

export default Navbar;
