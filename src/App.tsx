import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/:map" element={<SelectedMode />} />
          </Routes>
        </AppContainer>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
