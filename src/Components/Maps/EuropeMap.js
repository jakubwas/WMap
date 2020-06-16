import React, { useEffect } from "react";
import MapBuilder from "./MapBuilder";
import EuropeMapSVG from "./EuropeMapSVG";
import EuropeCountries from "../../Data/EuropeCountries";

const EuropeMap = () => {
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("https://restcountries.eu/rest/v2/region/europe");
            const re = await result.json();
            console.log(re);
        };
        fetchData();
    }, []);
    return (
        <MapBuilder
            Map={EuropeMapSVG}
            countriesList={EuropeCountries}
            sideNoteMessage={"Can you name all countries in Europe ?"}
        />
    );
};

export default EuropeMap;
