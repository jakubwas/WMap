import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MODES } from "../data/Modes";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import Map from "./Map";
import { setCurrentModeAction } from "../store/actions";

const SelectedMode = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!MODES.includes(id)) {
      history.push("/");
      dispatch(setCurrentModeAction(null));
    } else {
      dispatch(setCurrentModeAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <LeftSidebar />
      <Map />
      <RightSidebar />
    </>
  );
};

export default SelectedMode;