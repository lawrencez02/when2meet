import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

function App() {
  return <Main />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);