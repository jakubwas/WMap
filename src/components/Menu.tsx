import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import WorldMapSVG from "./WorldMapSVG";
import MenuButton from "./MenuButton";
import { device } from "../styles";

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;
const StyledMenuList = styled.div<{ mode: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: ${(props) => (props.mode === "countries" ? "80%" : "50%")};
  margin: 2rem 0;
  flex-wrap: wrap;
`;
const StyledSelectMode = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: black;
  text-align: center;
  background: white;

  @media ${device.dL1} {
    font-size: 3.5rem;
  }
`;

const Menu = () => {
  const [mode, setMode] = useState("");

  return (
    <StyledMenuContainer>
      <WorldMapSVG />
      <StyledSelectMode>
        {mode === "countries" ? "Select Region" : "Select Mode"}
      </StyledSelectMode>
      <StyledMenuList mode={mode}>
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
