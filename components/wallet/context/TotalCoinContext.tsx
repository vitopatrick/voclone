import { useState, createContext } from "react";
import { useFetchAllCoins } from "../../../hooks/useFetchAllCoins";
import { useFetchUser } from "../../../hooks/useFetchUser";
import { convertCurrency } from "../../../utils/formatCurrency";

export const TotalCoinContext = createContext<any | null | string | {}>({});

const TotalCoinProvider = ({ children }: any) => {
  const { userState: user, loading }: any = useFetchUser();
  const { coins: main } = useFetchAllCoins(30);

  const coins = [
    {
      id: 1,
      coin: "tron",
      img: "/tron.png",
      quantity: user?.tron ? user?.tron : 0,
      sym: "trx",
      amount: convertCurrency(main, user?.tron ? user?.tron : 0, "trx"),
    },
    {
      id: 2,
      coin: "USDT",
      img: "/usdt.png",
      quantity: user?.usdt ? user?.usdt : 0,
      sym: "usdt",
      amount: convertCurrency(main, user?.usdt ? user?.usdt : 0, "usdt"),
    },
    {
      id: 3,
      coin: "Bitcoin",
      img: "/btc.png",
      sym: "btc",
      quantity: user?.btc ? user?.btc : 0,
      amount: convertCurrency(main, user?.btc ? user?.btc : 0, "btc"),
    },
    {
      id: 4,
      coin: "Ethereum",
      img: "/eth.png",
      quantity: user?.eth ? user?.eth : 0,
      sym: "eth",
      amount: convertCurrency(main, user?.eth ? user?.eth : 0, "eth"),
    },
  ];

  return (
    <TotalCoinContext.Provider value={{ coinsTotal: coins }}>
      {children}
    </TotalCoinContext.Provider>
  );
};

export default TotalCoinProvider;
