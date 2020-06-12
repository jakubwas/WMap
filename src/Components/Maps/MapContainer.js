import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const SideBarContainer = (props) => {
    return <Container>{props.children}</Container>;
};

export default SideBarContainer;
