import React from "react";
import styled from "styled-components";
import "./menuButton.css";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`;

const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    width: 20rem;
    padding-bottom: 1rem;
    pointer-events: none;
`;

const Btn = styled.div`
    letter-spacing: 0.1rem;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 3.8rem;
    border-radius: 10px;
    max-width: 16rem;
    position: relative;
    text-transform: uppercase;
    width: 100%;
`;

const MenuButton = (props) => {
    return (
        <MainContainer>
            <ButtonContainer>
                <Btn className=" menu-btn-effect">
                    <span style={{ width: "100%", height: "100%", display: "block" }}>
                        {props.children}
                    </span>
                </Btn>
            </ButtonContainer>
        </MainContainer>
    );
};

export default MenuButton;
