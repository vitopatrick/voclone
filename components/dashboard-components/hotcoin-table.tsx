import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";

const HotCoinTable = ({ coins: firstCoins, loading }: any) => {
  const coins = firstCoins.slice(0, 5);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <div className="flex items-center justify-between mt-3 bg-white/40 py-3 px-2 rounded">
            <div className="font-semibold">Coin</div>
            <div className="font-semibold">Price</div>
          </div>
          {coins.map((coin: any) => (
            <div
              key={coin.id}
              className="flex items-center my-9 justify-between"
            >
              <div className="flex flex-col  gap-2">
                <h2 className="text-sm font-semibold">{coin.name}</h2>
                <p className="text-neutral-400">{coin.sym}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  {formatCurrency(coin.price, 4)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HotCoinTable;
