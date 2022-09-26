// Default generated code for the homepage of the website

// Import relevant React libraries and the Main component (which is the When2Meet table)
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

// The app simply returns an instance of the Main component (which is the When2Meet table)
function App() {
  return <Main />;
}

// Get the HTML root (the top-most level)
const rootElement = document.getElementById("root");
// and render the application!
ReactDOM.render(<App />, rootElement);