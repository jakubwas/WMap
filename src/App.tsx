import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { basicTheme, GlobalStyles } from "./styles/Theme.styles";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const App = (): JSX.Element => (
  <ThemeProvider theme={basicTheme}>
    <GlobalStyles />
    <Router>
      <div style={{ height: "100%" }}>
        <Navbar />
        <AppContainer>
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
        </AppContainer>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
