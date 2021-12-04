/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

interface ComponentProps {
  onClickHandler: (id: string) => void;
}

const MapEurope = (props: ComponentProps) => (
  <ComposableMap
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
      rotate: [-20.0, -52.0, 0],
      scale: 700,
    }}
    style={{ width: "100%" }}
  >
    <Graticule stroke="#EAEAEC" />
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#00ADB5"
            stroke="#EAEAEC"
            id={geo.properties.NAME}
            onClick={(e: any) => {
              const { id } = e.target;
              props.onClickHandler(id);
            }}
          />
        ))
      }
    </Geographies>
  </ComposableMap>
);

export const MemoizedMapEurope = React.memo(MapEurope);
