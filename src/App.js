import React from "react";
import Converter from "./components/Converter";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <Converter />
    </CurrencyProvider>
  );
}

export default App;