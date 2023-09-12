import React from "react";
import { useFetchAllCoins } from "../../../hooks/useFetchAllCoins";
import Loading from "../../../shared/loading/Loading";
import { formatCurrency } from "../../../utils/formatCurrency";
import { motion } from "framer-motion";

const TrendingCoinsTable = () => {
  const { coins: firstCoins, loading } = useFetchAllCoins(6);

  const coins = firstCoins.slice(0, 9);

  return (
    <section className="text-white mt-12">
      <div className="w-[90%] mx-auto">
        <div className="text-center py-3 text-2xl md:text-4xl font-bold">
          Explore the Latest Market Update
        </div>
        {loading && <Loading />}
        {!loading && <CoinTable coins={coins} />}
      </div>
    </section>
  );
};

const CoinTable = ({ coins }: any) => {
  return (
    <div className="font-bold mt-5">
      <div className="grid grid-cols-4 gap-2 justify-self-center bg-card py-3 px-2 rounded-t-md">
        <div className="col-span-2">Coin</div>
        <div className="hidden md:block">Sym</div>
        <div>Price</div>
      </div>
      <motion.div
        variants={{
          start: {
            opacity: 0,
          },
          end: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              duration: 1,
            },
          },
        }}
        transition={{
          duration: 1,
        }}
        initial="start"
        animate="end"
        className="grid grid-cols-4 bg-card/25 px-2"
      >
        {coins.map((coin: any) => (
          <>
            <motion.div className="py-3 col-span-2 flex gap-4 items-center">
              <div className="w-[12%] md:w-[6%]">
                <img src={coin.img} alt={coin.name} />
              </div>
              <div className="font-bold text-paper">{coin.name}</div>
            </motion.div>
            <motion.div className=" py-3 font-bold text-paper uppercase hidden md:block">
              {coin.sym}
            </motion.div>
            <motion.div className="font-bold py-5">
              {formatCurrency(coin.price)}
            </motion.div>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default TrendingCoinsTable;
