import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import MainContainer from "./Components/Layout/MainContainer";
import Menu from "./Components/Layout/Menu";
import About from "./Components/Layout/About";

import USMap from "./Components/Maps/USA/USMap";
import EuropeMap from "./Components/Maps/Europe/EuropeMap";
import AfricaMap from "./Components/Maps/Africa/AfricaMap";
import SouthAmericaMap from "./Components/Maps/SouthAmerica/SouthAmericaMap";
import NorthAmericaMap from "./Components/Maps/NorthAmerica/NorthAmericaMap";
import AsiaMap from "./Components/Maps/Asia/AsiaMap";

function App() {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/" component={Menu} />
            <Route exact path="/USA" component={USMap} />
            <Route exact path="/Europe" component={EuropeMap} />
            <Route exact path="/Africa" component={AfricaMap} />
            <Route exact path="/SouthAmerica" component={SouthAmericaMap} />
            <Route exact path="/NorthAmerica" component={NorthAmericaMap} />
            <Route exact path="/Asia" component={AsiaMap} />
          </Switch>
        </MainContainer>
      </div>
    </Router>
  );
}

export default App;
