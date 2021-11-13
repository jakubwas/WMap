import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorldMapSVG from "../maps/WorldMapSVG";
import MenuButton from "../buttons/MenuButton";
import {
  StyledMenuContainer,
  StyledMenuList,
  StyledSelectMode,
} from "./Menu.styles";

const Menu = () => {
  const [mode, setMode] = useState("");

  return (
    <StyledMenuContainer>
      <WorldMapSVG />
      <StyledSelectMode>
        {mode === "countries" ? "Select Region" : "Select Mode"}
      </StyledSelectMode>
      <StyledMenuList>
        {mode !== "countries" ? (
          <>
            <MenuButton>
              <Link to="/USA" className="link">
                US states
              </Link>
            </MenuButton>
            <MenuButton>
              <Link
                to="/"
                className="link"
                onClick={() => {
                  setMode("countries");
                }}
              >
                Countries
              </Link>
            </MenuButton>
          </>
        ) : (
          <>
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
          </>
        )}
      </StyledMenuList>
    </StyledMenuContainer>
  );
};

export default Menu;
