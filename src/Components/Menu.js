import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WorldMap from "./Maps/WorldMap";

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: white;
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
    width: 30rem;
`;

const listStyle = {
    textDecoration: "none",
    color: "#001f3f",
    fontSize: "2rem",
    fontWeight: "500",
    margin: "0.5rem",
    padding: "1rem 3rem",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
    background: "white",
    minWidth: "15rem",
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
            <WorldMap />
            <MenuList>
                <SelectMode>Select mode</SelectMode>
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
