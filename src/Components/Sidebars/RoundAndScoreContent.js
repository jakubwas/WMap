import React from "react";
import styled from "styled-components";

const RoundAndScore = styled.div`
    margin-top: 0.5rem;
    font-size: ${(props) => props.fontSize};
    font-weight: 500;
`;
// Round and Score content : current score and current round
const RoundAndScoreContent = (props) => {
    return <RoundAndScore fontSize={props.fontSize}>{props.children}</RoundAndScore>;
};

export default RoundAndScoreContent;
