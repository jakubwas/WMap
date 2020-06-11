import React from "react";
import styled from "styled-components";

const NavigationBar = styled.nav`
    background: #071e3d;
    min-height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
