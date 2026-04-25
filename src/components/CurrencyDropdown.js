import React from "react";

const CurrencyDropdown = ({ currencies, value, onChange }) => {
    if (!currencies || currencies.length === 0) {
        return <p>Loading...</p>;
    }
    
    return (
    <select value={value} onChange={onChange}>
        {currencies.map((currency, index) => (
            <option key={`${currency}-${index}`} value={currency}>
                {currency}
            </option>
        ))}
    </select>
  );
};

export default React.memo(CurrencyDropdown);