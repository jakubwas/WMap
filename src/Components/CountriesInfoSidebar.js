import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CountryInfoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const CountryInfoTitle = styled.div`
    font-size: 1.4rem;
    width: 7rem;
    color: white;
    margin-left: 1rem;
    display: flex;
    align-items: center;
`;

const CountryInfoData = styled.div`
    font-size: 2.4rem;
    color: white;
    margin-left: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: 500;
`;

const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 5rem;
    margin-top: 1rem;
`;

const CountriesInfoSidebar = (props) => {
    const displayArea = (area) => {
        const kmsq = `km${String.fromCharCode(178)}`
        return `${area} ${kmsq}`;
    };

    const displayPopulation = (population) => {
        return `${(population / 1000000).toFixed(2)} mln`;
    };

    return (
        <Fragment>
            {console.log(props.generatedStates)}
            {props.currentNumber > 0 && props.currentNumber !== 11 ? (
                <Container>
                    <img
                        style={{ width: "20rem", height: "10rem" }}
                        src={require(`../assets/EuropeFlags/${
                            props.generatedStates[props.currentNumber]
                        }.svg`)}
                    />
                    <CountryInfoContainer>
                        <RowContainer>
                            <CountryInfoTitle>Capital: </CountryInfoTitle>
                            <CountryInfoData>
                                {
                                    props.countriesData[
                                        props.generatedStates[props.currentNumber]
                                    ].capital
                                }
                            </CountryInfoData>
                        </RowContainer>
                        <RowContainer>
                            <CountryInfoTitle>Area: </CountryInfoTitle>
                            <CountryInfoData>
                                {displayArea(
                                    props.countriesData[
                                        props.generatedStates[props.currentNumber]
                                    ].area
                                )}
                            </CountryInfoData>
                        </RowContainer>
                        <RowContainer>
                            <CountryInfoTitle>Population: </CountryInfoTitle>
                            <CountryInfoData>
                                {displayPopulation(
                                    props.countriesData[
                                        props.generatedStates[props.currentNumber]
                                    ].population
                                )}
                            </CountryInfoData>
                        </RowContainer>
                    </CountryInfoContainer>
                </Container>
            ) : null}
        </Fragment>
    );
};

export default CountriesInfoSidebar;
