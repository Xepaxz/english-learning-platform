import { useState, useEffect } from 'react';

export function useCurrency() {
  const [currency, setCurrency] = useState<string>("PHP");
  const [rate, setRate] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        // Fetch user's local currency code based on IP
        const currRes = await fetch("https://ipapi.co/currency/");
        if (!currRes.ok) throw new Error("Failed to fetch currency");
        const localCurrency = await currRes.text();

        if (localCurrency && localCurrency.trim() !== "PHP") {
          const cleanCurrency = localCurrency.trim().toUpperCase();
          
          // Fetch exchange rates for PHP
          const rateRes = await fetch("https://api.exchangerate-api.com/v4/latest/PHP");
          if (!rateRes.ok) throw new Error("Failed to fetch rates");
          const rateData = await rateRes.json();

          if (rateData && rateData.rates && rateData.rates[cleanCurrency]) {
            setCurrency(cleanCurrency);
            setRate(rateData.rates[cleanCurrency]);
          }
        }
      } catch (err) {
        console.error("Currency conversion gracefully fell back to PHP:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrency();
  }, []);

  // Formats the PHP amount to include the local currency equivalent if available
  const formatPrice = (phpAmount: number) => {
    if (loading || currency === "PHP") {
      return `₱${phpAmount.toLocaleString()} PHP`;
    }
    
    const converted = Math.round(phpAmount * rate);
    
    // Format the local currency natively
    const localFormatted = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(converted);

    return `₱${phpAmount.toLocaleString()} PHP (~${localFormatted})`;
  };

  return { formatPrice, loading, currency };
}
