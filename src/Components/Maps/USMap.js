import React, { Fragment, useState, useEffect } from "react";
import USMapSVG from "./USMapSVG";
import styled from "styled-components";
import SideBarContainer from "../SideBarContainer";

const USMap = () => {
    const USStates = [
        "Massachusetts",
        "Minnesota",
        "Montana",
        "North Dakota",
        "Hawaii",
        "Idaho",
        "Washington",
        "Arizona",
        "California",
        "Colorado",
        "Nevada",
        "New Mexico",
        "Oregon",
        "Utah",
        "Wyoming",
        "Arkansas",
        "Iowa",
        "Kansas",
        "Missouri",
        "Nebraska",
        "Oklahoma",
        "South Dakota",
        "Louisiana",
        "Texas",
        "Connecticut",
        "New Hampshire",
        "Rhode Island",
        "Vermont",
        "Alabama",
        "Florida",
        "Georgia",
        "Mississippi",
        "South Carolina",
        "Illinois",
        "Indiana",
        "Kentucky",
        "North Carolina",
        "Ohio",
        "Tennessee",
        "Virginia",
        "Wisconsin",
        "West Virginia",
        "Delaware",
        "District of Columbia",
        "Maryland",
        "New Jersey",
        "New York",
        "Pennsylvania",
        "Maine",
        "Michigan",
    ];


    const generatedStates = [];

    const generateStates = () => {
        let uSState;
        for (let i = 0; i < 10; i++) {
            uSState = USStates[Math.floor(Math.random() * USStates.length)];
            if (!generatedStates.includes(uSState)) {
                generatedStates.push(uSState);
            } else {
                i--;
            }
        }
        console.log(generatedStates)
    };

    return (
        <Fragment>
            <SideBarContainer generateStates={generateStates}/>
            <USMapSVG />
        </Fragment>
    );
};

export default USMap;
