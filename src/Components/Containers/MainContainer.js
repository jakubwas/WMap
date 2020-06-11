import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;
    background: white;
    border: 1rem solid black;
`;

const MainContainer = (props) => {
    return <Container>{props.children}</Container>;
};
export default MainContainer;
    