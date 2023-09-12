import { useMemo, useState } from "react";
import axios from "axios";
import { formatCurrency } from "../utils/formatCurrency";

export const useGetMarketPrice = (coinName: string) => {
  const [coin, setCoin] = useState<string | number>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useMemo(() => {
    const controller = new AbortController();

    const fetchAllCoins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinName}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );

        setCoin(formatCurrency(data[0].current_price));

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllCoins();

    return () => controller.abort();
  }, []);

  return { coin, loading, error };
};
