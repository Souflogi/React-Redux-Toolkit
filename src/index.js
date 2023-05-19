import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import toolKitStore from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={toolKitStore}>
    <App />
  </Provider>
);
