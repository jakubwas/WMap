import React, { Fragment } from "react";
import MapBuilder from "./MapBuilder";
import NorthAmericaMapSVG from "./NorthAmericaMapSVG";
import NorthAmericaCountries from "../../Data/NorthAmericaCountries";
import NorthAmericaData from "../../Data/NorthAmericaData";

const NorthAmericaMap = () => {
    return (
        <Fragment>
            <MapBuilder
                Map={NorthAmericaMapSVG}
                countriesList={NorthAmericaCountries}
                countriesData={NorthAmericaData}
                sideNoteMessage={"Can you name all countries in North America ?"}
                svgFlagPath="NorthAmericaFlags"
            />
        </Fragment>
    );
};

export default NorthAmericaMap;
