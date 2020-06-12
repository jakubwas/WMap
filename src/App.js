import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import MapConainer from "./Components/Maps/MapContainer";
import SiderBarContainer from "./Components/SideBarContainer";
import USMap from "./Components/Maps/USMap";

function App() {
    return (
        <div style={{ height: "100%" }}>
            <Navbar />
            <MainContainer>
                <MapConainer>
                    <USMap />
                </MapConainer>
            </MainContainer>
        </div>
    );
}

export default App;
