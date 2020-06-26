import React, { Fragment } from "react";
import MapBuilder from "../MapBuilder";
import SouthAmericaMapSVG from "./SouthAmericaMapSVG";
import SouthAmericaCountries from "../../../Data/SouthAmericaCountries";
import SouthAmericaData from "../../../Data/SouthAmericaData";

const SouthAmericaMap = () => {
  return (
    <Fragment>
      <MapBuilder
        Map={SouthAmericaMapSVG}
        countriesList={SouthAmericaCountries}
        countriesData={SouthAmericaData}
        sideNoteMessage={"America"}
        svgFlagPath="SouthAmericaFlags"
      />
    </Fragment>
  );
};

export default SouthAmericaMap;
