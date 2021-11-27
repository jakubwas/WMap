import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { basicTheme, GlobalStyles } from "./styles/Theme.styles";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import SelectedMode from "./components/SelectedMode";

const App = () => (
  <ThemeProvider theme={basicTheme}>
    <GlobalStyles />
    <Router>
      <div style={{ height: "100%" }}>
        <Navbar />
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/map/:id" component={SelectedMode} />
            <Route path="*" component={Menu} />
          </Switch>
        </AppContainer>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
