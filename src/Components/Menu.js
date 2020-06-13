import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WorldMap from "./Maps/WorldMap";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background: white;
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: 2rem 0;
    flex-wrap: wrap;
`;

const listStyle = {
    textDecoration: "none",
    color: "#001f3f",
    fontSize: "1.5rem",
    fontWeight: "500",
    margin: "0.5rem",
    padding: "1rem 2rem",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
    background: "white",
    minWidth: "16rem",
};

const SelectMode = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: black;
    text-align: center;
    background: white;
`;

const Menu = () => {
    return (
        <MenuContainer>
            <WorldMap />
            <SelectMode>Select Mode</SelectMode>
            <MenuList>
                <Link to="/USA" style={listStyle}>
                    US states
                </Link>
                <Link to="/" style={listStyle}>
                    North America
                </Link>
                <Link to="/" style={listStyle}>
                    South America
                </Link>
                <Link to="/" style={listStyle}>
                    Europe
                </Link>
                <Link to="/" style={listStyle}>
                    Africa
                </Link>
                <Link to="/" style={listStyle}>
                    Asia
                </Link>
            </MenuList>
        </MenuContainer>
    );
};

export default Menu;
