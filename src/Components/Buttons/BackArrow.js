import React from "react";
import back from "../../assets/back.svg";
import { Link } from "react-router-dom";

const arrowStyle = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    margin: "0.3rem",
    cursor: "pointer",
};

const BackArrow = () => {
    return (
        <Link to="/">
            <img src={back} style={arrowStyle} alt="Back array"></img>
        </Link>
    );
};

export default BackArrow;
