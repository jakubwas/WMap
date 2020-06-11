import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import SiderBar from "./Components/SideBar";
import Map from "./Components/Map";

function App() {
    return (
        <div style={{ height: "100%" }}>
            <Navbar />
            <MainContainer>
                <SiderBar />
                <Map />
            </MainContainer>
        </div>
    );
}

export default App;
