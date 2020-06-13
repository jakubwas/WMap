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



const SideBarContainer = (props) => {
    return (
        <Container>
            {props.generateStates()}
            <SideNote>Can you name the US States ?</SideNote>
        </Container>
    );
};

export default SideBarContainer;
