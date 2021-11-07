import React from "react";
import { Link } from "react-router-dom";
import WorldMapSVG from "../../maps/WorldMapSVG";
import MenuButton from "../../buttons/MenuButton/MenuButton";
import { MenuContainer, MenuList, SelectMode } from "./Menu.styles";

const Menu = () => (
  <MenuContainer>
    <WorldMapSVG />
    <SelectMode>Select Mode</SelectMode>
    <MenuList>
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
    </MenuList>
  </MenuContainer>
);

export default Menu;
