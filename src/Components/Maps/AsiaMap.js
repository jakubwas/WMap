import React, { Fragment } from "react";
import MapBuilder from "./MapBuilder";
import AsiaMapSVG from "./AsiaMapSVG";
import AsiaCountries from "../../Data/AsiaCountries";
import AsiaData from "../../Data/AsiaData";

const AsiaMap = () => {
    return (
        <Fragment>
            <MapBuilder
                Map={AsiaMapSVG}
                countriesList={AsiaCountries}
                countriesData={AsiaData}
                sideNoteMessage={"Can you name all countries in Asia ?"}
                svgFlagPath="AsiaFlags"
            />
        </Fragment>
    );
};

export default AsiaMap;
