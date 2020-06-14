import React, { Fragment, useState, useEffect } from "react";
import USMapSVG from "./USMapSVG";
import SideBarContainer from "../SideBarContainer";
import MapContainer from "./MapContainer";
import WrongAnswer from "./WrongAnswer";
import "../../index.css";
import loader from "../../assets/loader.gif";
import USStates from "../../Data/USStates";

const USMap = () => {
    useEffect(() => {
        let state;
        let stateArray = [null];
        for (let i = 0; i < 10; i++) {
            state = USStates[Math.floor(Math.random() * USStates.length)];
            if (!generatedStates.includes(state)) {
                stateArray.push(state);
                setGeneratedStates(stateArray);
            } else {
                i--;
            }
        }
        console.log(stateArray);
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

    const onClickHandler = (e) => {
        if (currentNumber != 0) {
            setDisplayDescription("none");
            if (e.target.id === "") return;
            const event = document.getElementById(e.target.id);
            const correctAnswer = document.getElementById(generatedStates[currentNumber]);
            setWhereClicked(e.target.id);
            if (e.target.id != generatedStates[currentNumber]) {
                setWrongSelection(`Wrong, that's ${e.target.id} `);
                event.classList.add("wrong");
                correctAnswer.classList.add("correct");
            } else {
                event.classList.add("correct");
                setPoints(points + 1);
            }
            setTimeout(() => {
                event.classList.remove("wrong");
                correctAnswer.classList.remove("correct");
                setWrongSelection("");
                setCurrentNumber(currentNumber + 1);
            }, 1400);
        }
    };

    const [generatedStates, setGeneratedStates] = useState([]);
    const [wrongSelection, setWrongSelection] = useState("");
    const [whereClicked, setWhereClicked] = useState(null);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [points, setPoints] = useState(0);
    const [loading, setLoading] = useState(true);
    const [displayDescription, setDisplayDescription] = useState("inline-block");

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
            />
            <MapContainer>
                {!loading && <WrongAnswer>{wrongSelection}</WrongAnswer>}
                {loading && (
                    <img
                        src={loader}
                        style={{ width: "50px", height: "50px", display: "block" }}
                    />
                )}
                {!loading && (
                    <USMapSVG
                        onClickHandler={onClickHandler}
                        displayDescription={displayDescription}
                    />
                )}
            </MapContainer>
        </Fragment>
    );
};

export default USMap;
