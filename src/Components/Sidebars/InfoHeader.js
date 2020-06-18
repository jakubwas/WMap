import React from "react";
import styled from "styled-components";

const Header = styled.div`
    color: #001f3f;
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
`;
// Right Sidebar headers
const InfoHeader = (props) => {
    return <Header>{props.children}</Header>;
};

export default InfoHeader;
