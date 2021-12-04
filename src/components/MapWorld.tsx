/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

interface ComponentProps {
  onClickHandler: (id: string) => void;
}

const MapChart = (props: ComponentProps) => (
  <ComposableMap style={{ width: "100%" }}>
    <ZoomableGroup zoom={1}>
      <Graticule stroke="#EAEAEC" strokeWidth={0.8} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#00ADB5"
              stroke="#EAEAEC"
              strokeWidth="0.3"
              id={geo.properties.NAME}
              onClick={(e: any) => {
                const { id } = e.target;
                props.onClickHandler(id);
              }}
            />
          ))
        }
      </Geographies>
    </ZoomableGroup>
  </ComposableMap>
);

export default MapChart;
