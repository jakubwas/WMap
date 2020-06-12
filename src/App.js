import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import MapConainer from "./Components/Maps/MapContainer";
import SiderBarContainer from "./Components/SideBarContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import USMap from "./Components/Maps/USMap";
import Menu from "./Components/Menu";

function App() {
    return (
        <Router>
            <div style={{ height: "100%" }}>
                <Navbar />
                <MainContainer>
                    <Switch>
                        <Route exact path="/" component={Menu} />
                        <Route exact path="/USA" component={USMap} />
                        {/* And more... */}
                    </Switch>
                </MainContainer>
            </div>
        </Router>
    );
}

export default App;
