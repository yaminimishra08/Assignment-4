import { useEffect, useState } from "react";

export const useExchangeRates = (baseCurrency) => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.frankfurter.app/latest?base=${baseCurrency}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await res.json();
        setRates(data.rates);
        setError(null);
      } catch (err) {
        setError("Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();

    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, [baseCurrency]);

  return { rates, error, loading };
};