import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CountriesInfoSidebar = (props) => {
    return (
        <Fragment>
            {props.currentNumber > 0 && props.currentNumber !== 11 ? (
                <Container>
                    <img
                        style={{ width: "15rem", height: "10rem" }}
                        src={require(`../assets/EuropeFlags/${
                            props.generatedStates[props.currentNumber]
                        }.svg`)}
                    />
                </Container>
            ) : null}
        </Fragment>
    );
};

export default CountriesInfoSidebar;
