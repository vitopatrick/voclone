import React, { useContext } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import AmountCard from "../../shared/cards/amount-card";
import { formatCurrency } from "../../utils/formatCurrency";
import Link from "next/link";
import { TotalCoinContext } from "./context/TotalCoinContext";

const WalletAccount = () => {
  const { userState: state, loading }: any = useFetchUser();
  const context = useContext(TotalCoinContext);

  // console.log(context);

  return (
    <div className="p-4">
      <div>
        <h4 className="font-semibold  px-4 py-2 text-xl md:text-2xl underline">
          Assets Overview
        </h4>
        {/* <p className="text-white px-3 py-2 md:text-xl text-lg font-bold">
          {formatCurrency(state?.MainAccount)}
        </p> */}
        <div className="flex items-center gap-4 my-6  px-3">
          <div className="flex gap-2">
            <p className="font-semibold text-neutral-400">Tron</p>
            <p className="font-semibold uppercase">{state?.tron}trx</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-neutral-400">Eth</p>
            <p className="font-semibold uppercase">{state?.eth}eth</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-neutral-400">Btc</p>
            <p className="font-semibold uppercase">{state?.btc}btc</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-neutral-400">usdt</p>
            <p className="font-semibold uppercase">{state?.usdt}usdt</p>
          </div>
        </div>
        <Link
          href="/wallet/coins"
          className="text-teal-600 font-semibold p-2 capitalize bg-teal-100/10  mx-2 my-4 inline-block rounded"
        >
          see assets
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <AmountCard
          amount={state?.MainAccount}
          accountType={"Main Account"}
          loading={loading}
          color="blue"
        />

        <AmountCard
          amount={state?.TradingAccount}
          accountType={"Trading Account"}
          loading={loading}
          color="red"
        />
        <AmountCard
          amount={state?.StakingAccount ? state?.StakingAccount : 0}
          accountType={"Staking Account"}
          loading={loading}
          color="green"
        />
      </div>
    </div>
  );
};

export default WalletAccount;
