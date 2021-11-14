/* eslint-disable react/no-array-index-key */
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

const modes = [
  { name: "US states", to: "/usa" },
  { name: "Countries", to: "/" },
];
const countries = [
  { name: "North America", to: "/northamerica" },
  { name: "South America", to: "/southamerica" },
  { name: "Europe", to: "/europe" },
  { name: "Africa", to: "/africa" },
  { name: "Asia", to: "/asia" },
];

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
            {modes.map((element, index) => (
              <MenuButton key={index}>
                <Link
                  to={element.to}
                  className="link"
                  onClick={() => {
                    if (element.to === "/") {
                      setMode("countries");
                    } else {
                      setMode("");
                    }
                  }}
                >
                  {element.name}
                </Link>
              </MenuButton>
            ))}
          </>
        ) : (
          <>
            {countries.map((element, index) => (
              <MenuButton key={index}>
                <Link to={element.to} className="link">
                  {element.name}
                </Link>
              </MenuButton>
            ))}
          </>
        )}
      </StyledMenuList>
    </StyledMenuContainer>
  );
};

export default Menu;
