import React, { useState, useEffect, useMemo, useContext } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import ErrorMessage from "./ErrorMessage";
import { CurrencyContext } from "../context/CurrencyContext";

const Converter = () => {
    const {
        baseCurrency,
        setBaseCurrency,
        targetCurrency,
        setTargetCurrency,
    } = useContext(CurrencyContext);

    const [amount, setAmount] = useState(1)
    const [rates, setRates] = useState({})
    const [currencies, setCurrencies] = useState([])
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch("https://open.er-api.com/v6/latest/USD")
        .then((res) => {
            if (!res.ok) throw new Error("API Error");
            return res.json();
        })
        
        .then((data) => {
            setRates(data.rates);
            setCurrencies(Object.keys(data.rates));
            setError(null);
        })

        .catch(() => {
            setError("Failed to fetch exchange rates.");
        })
    }, []);
    
    // OPTIMIZED CALCULATION
    const convertedAmount = useMemo(() => {
        if (!rates || !rates[targetCurrency]) return 0;
        return (amount * rates[targetCurrency]).toFixed(2);
    }, [amount, rates, targetCurrency]);
    
    return (
    <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Currency Converter</h2>
        
        {error && <ErrorMessage message={error} />}
        
        {/* Amount Input */}
        <div>
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </div>

      {/* Currency Selection */}
      <div style={{ marginTop: "10px" }}>
        <CurrencyDropdown
        currencies={currencies}
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
        />
        
        <span style={{ margin: "0 10px" }}>➝</span>
        
        <CurrencyDropdown
          currencies={currencies}
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
        </div>

    {/* Output */}
    <h3 style={{ marginTop: "20px" }}>
        Converted Amount: {convertedAmount} {targetCurrency}
    </h3>

    <p>
        Exchange Rate: 1 {baseCurrency} ={" "}
        {rates[targetCurrency] || "-"} {targetCurrency}
      </p>
    </div>
  );
};

export default Converter;