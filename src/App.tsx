import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer/MainContainer";
import Navbar from "./components/layout/Navbar/Navbar";
import Menu from "./components/layout/Menu/Menu";

const App = (): JSX.Element => (
  <Router>
    <div style={{ height: "100%" }}>
      <Navbar />
      <MainContainer>
        {/* <Routes> */}
        {/* <Route exact path="/About" component={About} /> */}
        <Menu />
        {/* <Route exact path="/USA" component={USMap} /> */}
        {/* <Route exact path="/Europe" component={EuropeMap} /> */}
        {/* <Route exact path="/Africa" component={AfricaMap} /> */}
        {/* <Route exact path="/SouthAmerica" component={SouthAmericaMap} /> */}
        {/* <Route exact path="/NorthAmerica" component={NorthAmericaMap} /> */}
        {/* <Route exact path="/Asia" component={AsiaMap} /> */}
        {/* </Routes> */}
      </MainContainer>
    </div>
  </Router>
);

export default App;
