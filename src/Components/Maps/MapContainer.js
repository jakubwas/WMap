import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MapContainer = (props) => {
    return <Container>{props.children}</Container>;
};

export default MapContainer;
