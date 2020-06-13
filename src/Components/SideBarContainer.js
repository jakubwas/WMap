import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 20%;
    height: 100%;
    border-right: 1rem solid black;
`;

const SideNote = styled.h2`
    margin-top: 3rem;
    color: black;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 3rem;
    border-bottom: 1rem solid black;
`;

const Headings = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1rem solid black;
    height: 15rem;
`;

const SideBarContainer = (props) => {
    return (
        <Container>
            <SideNote>Can you name the US States ?</SideNote>
            <Headings>
                <h1>Find: {props.find}</h1>
                <h1>Youd have clicked: {props.youClicked}</h1>
            </Headings>
        </Container>
    );
};

export default SideBarContainer;
