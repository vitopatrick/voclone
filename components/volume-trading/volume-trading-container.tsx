import React from "react";
import VolumeOrderBook from "./volume-order-book";
import VolumeTradingPlan from "./volume-trading-plan";
import VolumeChart from "./Volume-chart";

const VolumeTradingContainer = () => {
  return (
    <div className="mx-2 my-2">
      <div className="md:grid md:grid-cols-4">
        <VolumeChart />
        <VolumeTradingPlan />
      </div>
      <VolumeOrderBook />
    </div>
  );
};

export default VolumeTradingContainer;
