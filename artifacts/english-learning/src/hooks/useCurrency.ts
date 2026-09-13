import { useState } from 'react';

export function useCurrency() {
  const [loading] = useState(false);
  const currency = "USD";

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return { formatPrice, loading, currency };
}
