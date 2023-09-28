import { stakingOptions } from "../../lib/staking-options";
import StakingModal from "./staking-modal";
import { useState } from "react";
import StakingOrder from "./staking-order";

const Staking = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();

  // pass data

  const passData = (passData: any) => {
    setVisible(true);
    setData(passData);
  };

  return (
    <>
      <div className="md:grid grid-cols-3 gap-3 mx-2">
        {/* children div for the grid component */}
        {stakingOptions.map((opt) => (
          <div
            key={opt.id}
            className="bg-white p-4 font-main rounded shadow my-4 md:my-0"
          >
            {/*  body duration and range */}

            {/* staking name */}
            <div className="py-4 flex gap-3">
              <div className="w-[40px]">
                <img src={opt.image} alt="" />
              </div>
              <div>
                <h4
                  className={
                    opt.plan === "USDT"
                      ? "text-teal-600 font-semibold text-xl"
                      : opt.plan === "TON"
                      ? "text-blue-600 font-semibold text-xl"
                      : "text-red-500 font-semibold text-xl"
                  }
                >
                  {opt.plan}
                </h4>
                <p className="text-sm my-2 text-neutral-400 font-bold">
                  {opt.network}
                </p>
              </div>
            </div>
            {/* staking range */}
            <div>
              <p className="font-sec text-2xl font-bold text-paper">
                {opt.range}
              </p>
            </div>
            <div className="my-4 flex items-center gap-3 font-sec">
              <p className="font-semibold text-xs text-neutral-400">
                Redemption Period
              </p>
              <p className="font-semibold text-xs">{opt.duration}days</p>
            </div>
            <div className="my-4 flex items-center gap-3 font-sec">
              <p className="font-semibold text-xs text-neutral-400">
                Reference APR
              </p>
              <p className="font-semibold text-xs">{opt.roi}</p>
            </div>
            <button
              onClick={() => passData(opt)}
              className="mt-4 mb-2 font-sec inline-block bg-teal-700 py-1 rounded text-white  w-full hover:bg-teal-600"
            >
              Stake now
            </button>
          </div>
        ))}
      </div>
      <StakingModal visible={visible} setVisible={setVisible} data={data} />
      <StakingOrder />
    </>
  );
};

export default Staking;
