import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Components/Theme";

ReactDOM.render(
  // <ThemeProvider theme={Theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </ThemeProvider>,
  document.getElementById("root")
);
