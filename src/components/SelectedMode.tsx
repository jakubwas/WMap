import React from "react";
import { useParams } from "react-router-dom";

const SelectedMode = () => {
  const { map } = useParams();

  return (
    <div style={{ fontSize: "50px", textAlign: "center" }}>
      Selected Mode Component: {map}
    </div>
  );
};

export default SelectedMode;
