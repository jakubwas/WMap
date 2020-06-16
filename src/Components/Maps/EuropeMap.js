import React from "react";
import MapBuilder from "./MapBuilder";
import EuropeMapSVG from "./EuropeMapSVG";
import EuropeCountries from "../../Data/EuropeCountries";

const EuropeMap = () => {
    return (
        <MapBuilder
            Map={EuropeMapSVG}
            countriesList={EuropeCountries}
            sideNoteMessage={"Can you name all countries in Europe ?"}
        />
    );
};

export default EuropeMap;
