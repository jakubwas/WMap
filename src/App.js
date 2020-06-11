import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/Containers/MainContainer";
import SiderBarContainer from "./Components/Containers/SideBarContainer";
import Map from "./Components/Map";

function App() {
    return (
        <div style={{ height: "100%" }}>
            <Navbar />
            <MainContainer>
                <SiderBarContainer />
                <Map />
            </MainContainer>
        </div>
    );
}

export default App;
