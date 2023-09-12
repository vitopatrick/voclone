import { useMemo, useState } from "react";
import axios from "axios";

export const useFetchAllCoins = (length = 9) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useMemo(() => {
    const controller = new AbortController();

    const fetchAllCoins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://api.coinranking.com/v2/coins"
        );

        const coinData = data.data?.coins?.map((coin: any) => ({
          name: coin.name,
          price: coin.price,
          sym: coin.symbol,
          img: coin.iconUrl,
          marketCap: coin.marketCap,
        }));

        setCoins(coinData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllCoins();

    return () => controller.abort();
  }, []);

  return { coins, loading, error };
};
