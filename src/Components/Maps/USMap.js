import React from "react";
import MapBuilder from "./MapBuilder";
import USMapSVG from "./USMapSVG";
import USStates from "../../Data/USStates";

const USMap = () => {
    return (
        <MapBuilder
            Map={USMapSVG}
            countriesList={USStates}
            sideNoteMessage={"Can you name the US States ?"}
        />
    );
};

export default USMap;
