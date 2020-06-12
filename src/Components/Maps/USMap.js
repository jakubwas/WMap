import React from "react";
import USMapSVG from "./USMapSVG";
import Score from "../Score";

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
        "Alaska",
    ];

    const generatedNumbers = [];
    let x;

    const generateQuiz = () => {
        for (let i = 0; i < 10; i++) {
            x = USStates[Math.floor(Math.random() * USStates.length)];
            if (!generatedNumbers.includes(x)) {
                generatedNumbers.push(x);
            } else {
                i--;
            }
        }
    };

    return (
        <div>
            <USMapSVG />
        </div>
    );
};

export default USMap;
