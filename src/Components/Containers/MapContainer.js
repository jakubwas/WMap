import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgb(0, 15, 26);
`;

const SideBarContainer = (props) => {
    return <Container>{props.children}</Container>;
};

export default SideBarContainer;
