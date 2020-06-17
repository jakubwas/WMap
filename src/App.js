import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import USMap from "./Components/Maps/USMap";
import EuropeMap from "./Components/Maps/EuropeMap";
import AfricaMap from "./Components/Maps/AfricaMap";
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
                        <Route exact path="/Europe" component={EuropeMap} />
                        <Route exact path="/Africa" component={AfricaMap} />
                        {/* And more... */}
                    </Switch>
                </MainContainer>
            </div>
        </Router>
    );
}

export default App;
