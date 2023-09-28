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

const StakingItem = ({ plan, network, amount, startDate, profitDate }: any) => {
  return (
    <div className="my-3 p-4 flex justify-between items-center">
      <div>
        <div className="font-bold">{plan}</div>
        <div>Start Date:{startDate}</div>
      </div>
      <div className="font-bold">{network}</div>
      <div>
        <div className="font-bold">{formatCurrency(amount)}</div>
        <div>Profit Date:{profitDate}</div>
      </div>
    </div>
  );
};

export default StakingOrder;
