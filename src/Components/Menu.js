import React, { Fragment } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import USMap from "./Maps/USMap";
import WordMapSVG from "./Maps/WordMapSVG";

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: white;
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
`;

const listStyle = {
    textDecoration: "none",
    color: "#001f3f",
    fontSize: "3rem",
    fontWeight: "600",
    margin: "0.5rem",
    padding: "1rem 3rem",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
    background: "white",
};

const SelectMode = styled.h1`
    font-size: 3.3rem;
    font-weight: 700;
    color: black;
    text-align: center;
    background: white;
    margin-bottom: 2rem;
`;

const Menu = () => {
    return (
        <MenuContainer>
            <WordMapSVG />
            <MenuList>
                <SelectMode>Select mode</SelectMode>
                <Link to="/" style={listStyle}>
                    Countries
                </Link>
                <Link to="/" style={listStyle}>
                    US states
                </Link>
            </MenuList>
        </MenuContainer>
    );
};

export default Menu;
