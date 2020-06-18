import React, { Fragment } from "react";
import styled from "styled-components";

const CountriesInfoSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CountryInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const CountryInfoTitle = styled.div`
    display: flex;
    align-items: flex-end;
    width: 7rem;
    margin-left: 1rem;
    font-size: 1.4rem;
    font-style: italic;
    color: rgb(255, 255, 255);
`;
const CountryInfoData = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 2rem;
    text-align: center;
    font-size: 2.2rem;
    line-height: 2.2rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.88);
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
        const kmsq = `km${String.fromCharCode(178)}`;
        return `${area} ${kmsq}`;
    };

    const displayPopulation = (population) => {
        return `${(population / 1000000).toFixed(2)} mln`;
    };

    return (
        <Fragment>
            {props.currentNumber > 0 && props.currentNumber !== 11 ? (
                <CountriesInfoSidebarContainer>
                    <img
                        style={{ width: "20rem", height: "10rem", marginBottom: "3rem" }}
                        src={require(`../../assets/${props.svgFlagPath}/${
                            props.generatedStates[props.currentNumber]
                        }.svg`)}
                        alt="Flag"
                    />
                    <CountryInfoContainer>
                        <RowContainer>
                            <CountryInfoTitle>Capital : </CountryInfoTitle>
                            <CountryInfoData>
                                {
                                    props.countriesData[
                                        props.generatedStates[props.currentNumber]
                                    ].capital
                                }
                            </CountryInfoData>
                        </RowContainer>
                        <RowContainer>
                            <CountryInfoTitle>Area : </CountryInfoTitle>
                            <CountryInfoData>
                                {displayArea(
                                    props.countriesData[
                                        props.generatedStates[props.currentNumber]
                                    ].area
                                )}
                            </CountryInfoData>
                        </RowContainer>
                        {props.svgFlagPath !== "USFlags" && (
                            <RowContainer>
                                <CountryInfoTitle>Pop. : </CountryInfoTitle>
                                <CountryInfoData>
                                    {displayPopulation(
                                        props.countriesData[
                                            props.generatedStates[props.currentNumber]
                                        ].population
                                    )}
                                </CountryInfoData>
                            </RowContainer>
                        )}
                    </CountryInfoContainer>
                </CountriesInfoSidebarContainer>
            ) : null}
        </Fragment>
    );
};

export default CountriesInfoSidebar;
