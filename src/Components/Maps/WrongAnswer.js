import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 3rem;
    font-weight: 600
`;

const WrongAnswer = (props) => {
    return <Container >{props.children}</Container>;
};

export default WrongAnswer;
