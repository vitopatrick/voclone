import HotCoinTable from "./hotcoin-table";
import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";

const DashboardHotcoins = () => {
  const { coins, loading } = useFetchAllCoins(10);

  return (
    <div className="bg-white rounded font-main  flex-1 w-full self-start">
      <div className="p-2">
        <div>
          <h1 className="font-sec font-bold text-lg text-paper">Market</h1>
        </div>
        <HotCoinTable coins={coins} loading={loading} />
      </div>
    </div>
  );
};

export default DashboardHotcoins;
