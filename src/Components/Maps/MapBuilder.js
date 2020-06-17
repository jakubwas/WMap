import React, { Fragment, useState, useEffect } from "react";
import USMapSVG from "./USMapSVG";
import SideBarContainer from "../SideBarContainer";
import MapContainer from "./MapContainer";
import WrongAnswer from "./WrongAnswer";
import "../../index.css";
import loader from "../../assets/loader.gif";
import RightSidebarContainer from "../../RightSidebarContainer";

const MapBuilder = (props) => {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

    const onClickHandler = (e) => {
        if (currentNumber !== 0 && currentNumber !== 11 && isActive === true && e.target.id) {
            setDisplayDescription("none");
            setIsActive(false);
            if (e.target.id === "") return;
            const event = document.getElementById(e.target.id);
            const correctAnswer = document.getElementById(generatedStates[currentNumber]);
            setWhereClicked(e.target.id);
            if (e.target.id !== generatedStates[currentNumber]) {
                setWrongSelection(`Wrong, that's ${e.target.id} `);
                event.classList.add("wrong");
                correctAnswer.classList.add("correct");
            } else {
                event.classList.add("correct");
                setPoints(points + 1);
            }
            setResetTimer(true);

            setTimeout(() => {
                event.classList.remove("wrong");
                correctAnswer.classList.remove("correct");
                setWrongSelection("");
                setCurrentNumber(currentNumber + 1);
                setIsActive(true);
            }, 1400);
        }
    };

    const [isActive, setIsActive] = useState(false);
    const [generatedStates, setGeneratedStates] = useState([]);
    const [wrongSelection, setWrongSelection] = useState("");
    const [whereClicked, setWhereClicked] = useState(null);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [points, setPoints] = useState("-");
    const [loading, setLoading] = useState(true);
    const [displayDescription, setDisplayDescription] = useState("inline-block");
    const [resetTimer, setResetTimer] = useState(false);

    return (
        <Fragment>
            <SideBarContainer
                youClicked={whereClicked}
                find={generatedStates[currentNumber]}
                currentNumber={currentNumber}
                setCurrentNumber={setCurrentNumber}
                points={points}
                setDisplayDescription={setDisplayDescription}
                setPoints={setPoints}
                isActive={isActive}
                setIsActive={setIsActive}
                resetTimer={resetTimer}
                setResetTimer={setResetTimer}
                setGeneratedStates={setGeneratedStates}
                generatedStates={generatedStates}
                countriesList={props.countriesList}
                sideNoteMessage={props.sideNoteMessage}
                countriesData={props.countriesData}
                svgFlagPath={props.svgFlagPath}
            />
            <MapContainer>
                {!loading && <WrongAnswer>{wrongSelection}</WrongAnswer>}
                {!loading && (
                    <RightSidebarContainer
                        isActive={isActive}
                        setIsActive={setIsActive}
                        currentNumber={currentNumber}
                        setCurrentNumber={setCurrentNumber}
                        resetTimer={resetTimer}
                        setResetTimer={setResetTimer}
                        points={points}
                        setPoints={setPoints}
                    />
                )}
                {loading && (
                    <img
                        src={loader}
                        style={{ width: "50px", height: "50px", display: "block" }}
                    />
                )}
                {!loading && (
                    <props.Map
                        onClickHandler={onClickHandler}
                        displayDescription={displayDescription}
                    />
                )}
            </MapContainer>
        </Fragment>
    );
};

export default MapBuilder;
