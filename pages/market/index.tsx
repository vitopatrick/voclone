import Layout from "../../shared/dashboard-layout/Layout";
import { useAuth } from "../../hooks/useAuth";
import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";
import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";

const MarketsPage = () => {
  // call the auth hook
  useAuth();

  // call the get coin hook
  const { loading, coins } = useFetchAllCoins();
  return (
    <Layout>
      {/* Table header */}
      <div className="p-4 font-semibold flex justify-between bg-neutral-200 mx-4 mt-2 rounded">
        <div className="flex-1">Coin</div>
        <div className="flex-1 text-center">Market Cap</div>
        <div className="text-center flex-1">Price</div>
      </div>
      {/* end of table header */}
      {/* table body */}

      {loading ? (
        <Loading />
      ) : (
        <>
          {coins.map((coin: any) => (
            <div className="mx-4 mt-2 p-4 font-normal  flex justify-between bg-100/30 rounded">
              <div className="flex-1">
                <h4 className="font-semibold">{coin.name}</h4>
                <p className="text-neutral-400">{coin.sym}</p>
              </div>
              <div className="text-center flex-1">
                {formatCurrency(coin.marketCap)}
              </div>
              <div className="flex-1 text-center">
                {formatCurrency(coin.price, 4)}
              </div>
            </div>
          ))}
        </>
      )}

      {/* end of table body */}
    </Layout>
  );
};

export default MarketsPage;
