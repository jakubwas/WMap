import React from "react";
import styled from "styled-components";

const NavigationBar = styled.nav`
    background: #001f3f;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1rem solid black;
    border-left: 1rem solid black;
    border-right: 1rem solid black;
`;

const AppTitle = styled.h1`
    font-size: 2rem;
    margin-left: 2rem;
    color: white;
    font-family: "Montserrat", sans-serif;
`;

const Navbar = () => {
    return (
        <NavigationBar>
            <AppTitle>WEnergy</AppTitle>
        </NavigationBar>
    );
};

export default Navbar;
