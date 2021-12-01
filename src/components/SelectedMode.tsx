/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MODES } from "../data/Modes";
import Sidebar from "./Sidebar";
import Map from "./Map";
import {
  setCurrentModeAction,
  setGeneratedQuizAction,
  setResetGameAction,
} from "../store/actions";
import { generateQuiz } from "../utils/generateQuiz";

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

  useEffect(() => {
    dispatch(setResetGameAction());
    const quiz = generateQuiz(id);
    dispatch(setGeneratedQuizAction(quiz));
  }, []);

  return (
    <>
      <Sidebar />
      <Map />
    </>
  );
};

export default SelectedMode;
