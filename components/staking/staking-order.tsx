import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";
import { useFetchStakes } from "./hook/useFetchStaking";

const StakingOrder = () => {
  return (
    <section className="font-main my-3 mx-2 p-2">
      <div className="mx-2">
        <header>
          <h4 className="font-semibold text-2xl py-3">Staking Orders</h4>
        </header>
        <StakingTable />
      </div>
    </section>
  );
};

const StakingTable = () => {
  const { stakes, loading } = useFetchStakes();

  

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        (stakes.length > 0 ? (
          <div>
            {stakes.map((stake: any) => (
              <StakingItem
                key={stake.amount + Math.random()}
                plan={stake.plan}
                amount={stake.amount}
                startDate={stake.startDate}
                profitDate={stake.profitDate}
                network={stake.network}
                profit={stake.profit}
              />
            ))}
          </div>
        ) : (
          <div className="font-semibold flex items-center justify-center my-8 text-base text-black">
            Opps Nothing here
          </div>
        ))}
    </>
  );
};

const StakingItem = ({ plan, network, amount, startDate, profitDate,profit }: any) => {
  return (
    <div className="my-3 p-4 flex justify-between items-center">
      <div>
        <div className="font-bold flex gap-2">
          <h4>{plan}</h4>
          <h4>{formatCurrency(amount)}</h4>
        </div>
        <div>Start Date:{startDate}</div>
      </div>
      <div className="font-bold hidden md:block">{network}</div>
      <div>
        <div className="font-bold">{formatCurrency(profit)}</div>
        <div>Profit Date:{profitDate}</div>
      </div>
    </div>
  );
};

export default StakingOrder;
