import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WorldMapSVG from "./Maps/WorldMapSVG";
import MenuButton from "./Buttons/MenuButton";
import "./Buttons/menuButton.css";

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
            <WorldMapSVG />
            <SelectMode>Select Mode</SelectMode>
            <MenuList>
                <MenuButton>
                    <Link to="/USA" className="link">
                        US states
                    </Link>
                </MenuButton>
                <MenuButton>
                    <Link to="/" className="link">
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
                    <Link to="/" className="link">
                        Asia
                    </Link>
                </MenuButton>
            </MenuList>
        </MenuContainer>
    );
};

export default Menu;
