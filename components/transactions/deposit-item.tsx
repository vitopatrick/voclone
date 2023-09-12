import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const DepositItem = ({ coin, amount, approved, date }: any) => {
  return (
    <div className="grid grid-cols-4 bg-bg/50 px-2">
      <div className="py-2 uppercase">{coin}</div>
      <div className="py-2">{formatCurrency(amount)}</div>
      <div className={approved ? "py-2 text-teal-400" : "py-2 text-red-400"}>
        {approved ? "Approved" : "Pending"}
      </div>
      <div className="py-2">{date} </div>
    </div>
  );
};

export default DepositItem;
