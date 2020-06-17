import React, { Fragment } from "react";
import MapBuilder from "./MapBuilder";
import AfricaMapSVG from "./AfricaMapSVG";
import AfricaCountries from "../../Data/AfricaCountries";
import AfricaData from "../../Data/AfricaData";

const AfricaMap = () => {
    return (
        <Fragment>
            <MapBuilder
                Map={AfricaMapSVG}
                countriesList={AfricaCountries}
                countriesData={AfricaData}
                sideNoteMessage={"Can you name all countries in Africa ?"}
                svgFlagPath="AfricaFlags"
            />
        </Fragment>
    );
};

export default AfricaMap;
