import React from "react";

const CurrencySelect = React.memo(({ currencies = [], value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {currencies.length === 0 ? (
        <option>Loading...</option>
      ) : (
        currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))
      )}
    </select>
  );
});

export default CurrencySelect;