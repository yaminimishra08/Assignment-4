import { createContext, useState, useEffect, useMemo } from "react";

export const CurrencyContext = createContext({
    baseCurrency: "USD",
    setBaseCurrency: () => {},
    targetCurrency: "INR",
    setTargetCurrency: () => {},
});

export const CurrencyProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = useState(
        localStorage.getItem("baseCurrency") || "USD"
    );

    const [targetCurrency, setTargetCurrency] = useState(
        localStorage.getItem("targetCurrency") || "INR" 
    );
    
    useEffect(() => {
        localStorage.setItem("baseCurrency", baseCurrency);
    }, [baseCurrency]);
    
    useEffect(() => {
        localStorage.setItem("targetCurrency", targetCurrency);
    }, [targetCurrency]);
    
    const value = useMemo(() => ({
        baseCurrency,
        setBaseCurrency,
        targetCurrency,
        setTargetCurrency,
    }), [baseCurrency, targetCurrency]);
    
    return (
    <CurrencyContext.Provider value={value}>
        
        {children}
        </CurrencyContext.Provider>
        );
    };