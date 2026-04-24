import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrencyProvider } from "./context/CurrencyContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
);