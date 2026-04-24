import { useContext, useMemo, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { useExchangeRates } from "../hooks/useExchangeRates";
import CurrencySelect from "./CurrencySelect";
import ErrorMessage from "./ErrorMessage";

const Converter = () => {
  const { defaultFrom, defaultTo } = useContext(CurrencyContext);

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);

  const { rates, error, loading } = useExchangeRates(from);

  const currencies = useMemo(() => Object.keys(rates), [rates]);

  const convertedAmount = useMemo(() => {
    if (!rates[to]) return 0;
    return (amount * rates[to]).toFixed(2);
  }, [amount, rates, to]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="converter">
      <h2>Currency Converter</h2>

      <ErrorMessage message={error} />

      <div className="row">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <CurrencySelect
          currencies={[from, ...currencies.filter((c) => c !== from)]}
          value={from}
          onChange={setFrom}
        />

        <span>→</span>

        <CurrencySelect
          currencies={currencies}
          value={to}
          onChange={setTo}
        />
      </div>

      <div className="result">
        {`${amount} ${from} = ${convertedAmount} ${to}`}
      </div>

      <div className="rate">
        {rates[to] && `1 ${from} = ${rates[to]} ${to}`}
      </div>
    </div>
  );
};

export default Converter;