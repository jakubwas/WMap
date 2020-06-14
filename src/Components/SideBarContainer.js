import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 35rem;
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

const FindContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1rem solid black;
    min-height: 15rem;
`;

const Find = styled.div`
    font-size: 3.4rem;
    color: rgb(36, 49, 235);
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-weight: 600;
`;

const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 20rem;
    border-bottom: 1rem solid black;
`;

const SideBarContainer = (props) => {
    return (
        <Container>
            <SideNote>Can you name the US States ?</SideNote>
            <FindContainer>
                <h1 style={{ textAlign: "center", fontWeight: "400" }}>
                    Find: <Find>{props.find}</Find>
                </h1>
                <h2>Round : {props.currentNumber + 1}/10</h2>
            </FindContainer>
            <Score>
                <h1>Score: </h1>
                <h1 style={{ marginTop: "2rem" }}>
                    <div style={{fontSize: 
                    '3.5rem'}}>{props.points} </div>
                </h1>
            </Score>
        </Container>
    );
};

export default SideBarContainer;
