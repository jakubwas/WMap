import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Store } from "redux";
import { Provider } from "react-redux";
import { basicTheme, GlobalStyles } from "./styles/Theme.styles";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import SelectedMode from "./components/SelectedMode";

interface ComponentProps {
  store: Store;
}

const App = (props: ComponentProps) => (
  <Provider store={props.store}>
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
  </Provider>
);

export default App;
