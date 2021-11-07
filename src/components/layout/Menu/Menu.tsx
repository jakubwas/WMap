import React from "react";
import { Link } from "react-router-dom";
import WorldMapSVG from "../../maps/WorldMapSVG";
import MenuButton from "../../buttons/MenuButton/MenuButton";
import {
  StyledMenuContainer,
  StyledMenuList,
  StyledSelectMode,
} from "./Menu.styles";

const Menu = () => (
  <StyledMenuContainer>
    <WorldMapSVG />
    <StyledSelectMode>Select Mode</StyledSelectMode>
    <StyledMenuList>
      <MenuButton>
        <Link to="/USA" className="link">
          US states
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to="/NorthAmerica" className="link">
          North America
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to="/SouthAmerica" className="link">
          South America
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to="/Europe" className="link">
          Europe
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to="/Africa" className="link">
          Africa
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to="/Asia" className="link">
          Asia
        </Link>
      </MenuButton>
    </StyledMenuList>
  </StyledMenuContainer>
);

export default Menu;
