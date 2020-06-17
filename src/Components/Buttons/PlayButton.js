import React from "react";
import styled from "styled-components";
import "./playButton.css";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;1
`;

const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    padding: 4rem 0rem;
    width: 24rem;
    background: #001f3f;
`;

const Btn = styled.div`
    letter-spacing: 0.1rem;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 4.5rem;
    max-width: 16rem;
    position: relative;
    text-transform: uppercase;
    width: 100%;
    background: white;
`;

const Button = (props) => {
    return (
        <MainContainer>
            <ButtonContainer>
                <Btn
                    onClick={props.onClick}
                    className="effect"
                    data-sm-link-text={props.backText}
                >
                    <span>{props.children}</span>
                </Btn>
            </ButtonContainer>
        </MainContainer>
    );
};

export default Button;
