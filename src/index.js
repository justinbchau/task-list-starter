import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import App from "./components/App";
import TaskContextProvider from "./context/TaskContext";

ReactDOM.render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>,
  document.querySelector("#root")
);
