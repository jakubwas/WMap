import React, { Fragment, useEffect } from "react";
import MapBuilder from "./MapBuilder";
import EuropeMapSVG from "./EuropeMapSVG";
import EuropeCountries from "../../Data/EuropeCountries";
import EuropeData from "../../Data/EuropeData";

const EuropeMap = () => {
    return (
        <Fragment>
            <MapBuilder
                Map={EuropeMapSVG}
                countriesList={EuropeCountries}
                countriesData={EuropeData}
                sideNoteMessage={"Can you name all countries in Europe ?"}
                svgFlagPath="EuropeFlags"
            />
        </Fragment>
    );
};

export default EuropeMap;
