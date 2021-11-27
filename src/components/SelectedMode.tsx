import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MODES } from "../data/Modes";

const SelectedMode = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    if (!MODES.includes(id)) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div style={{ fontSize: "50px", textAlign: "center" }}>
      Selected Mode Component: {id}
    </div>
  );
};

export default SelectedMode;
