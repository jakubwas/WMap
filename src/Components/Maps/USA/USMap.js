import React from "react";
import MapBuilder from "../MapBuilder";
import USMapSVG from "./USMapSVG";
import USStates from "../../../Data/USStates";
import USStatesData from "../../../Data/USStatesData";

const USMap = () => {
  return (
    <MapBuilder
      Map={USMapSVG}
      countriesList={USStates}
      sideNoteMessage={"Can you name the US States ?"}
      countriesData={USStatesData}
      svgFlagPath="USFlags"
    />
  );
};

export default USMap;
