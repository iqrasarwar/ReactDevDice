import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { INTL8Provider, locals } from "./intl8";
import { FormattedMessage } from "react-intl";
function App() {
  return (
    <INTL8Provider locale={locals.FRENCH}>
      <div className="App">
        <header className="App-header">
          <FormattedMessage id="hello" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </INTL8Provider>
  );
}

export default App;
