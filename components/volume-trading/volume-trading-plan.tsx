import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { store } from "../../firebase";
import { useFetchUser } from "../../hooks/useFetchUser";
import { toast } from "react-toastify";
import { formatCurrency } from "../../utils/formatCurrency";
import TradingModal from "../../shared/modal/trading-modal";
import { profitCalculation } from "../../lib/calculate-profit";
import { VolumeContext } from "./context/VolumeContext";
import * as Fa from "react-icons/fa";

const VolumeTradingPlan = () => {
  // State of the select tag
  const [amount, setAmount] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState<string>("24 hours");

  const router = useRouter();
  const { user: state }: any = useContext(UserContext);
  const { selectedCoin } = useContext(VolumeContext);
  const { userState }: any = useFetchUser();

  // function to add Orders
  async function addOrders(e: any) {
    e.preventDefault();
    // if the Amount Field is empty
    if (!amount) {
      return toast("Please Enter a Trading amount", {
        position: "bottom-center",
        type: "error",
        bodyClassName: "toast",
      });
    }
    // if the amount is less tha $300
    if (amount < 300) {
      return toast("Minimum Trading amount is $300", {
        position: "bottom-center",
        type: "error",
        bodyClassName: "toast",
      });
    }
    // if the amount is more than that in the Main Account
    if (amount > userState.MainAccount) {
      return toast("Could not Perform Trade Please Fund Account", {
        position: "bottom-center",
        type: "error",
        bodyClassName: "toast",
      });
    }

    try {
      // create the collection ref
      const orderRef = collection(store, "users", `${state.email}`, "orders");

      const profit = profitCalculation(+amount, duration);
      // update account
      const userRef = doc(store, "/users", `${state.email}`);
      await updateDoc(userRef, {
        TradingAccount: increment(+amount),
        MainAccount: increment(-amount),
      });
      // create Collection and then reload page or refresh page
      await addDoc(orderRef, {
        coin: selectedCoin.name,
        amount,
        date: serverTimestamp(),
        profit,
        duration,
        status: false,
      });
      await fetch("/api/trade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          amount,
          coin: selectedCoin.name,
          duration,
        }),
      });
      router.reload();
    } catch (error) {
      return toast("Could not Perform Trade", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  }

  return (
    <>
      <div className="bg-white shadow-md font-main p-4 rounded">
        {/* parent container */}
        <div>
          {/* child content */}
          <div className="flex flex-col gap-4">
            {/* header component */}
            <div className="mb-4">
              <h3 className="pt-2 pb-1 text-xl font-bold">Call Trade</h3>
              <p className="text-sm text-neutral-400 capitalize">
                select your trading options
              </p>
            </div>
            {/* form component */}
            <div>
              <div>
                <div className="mt-3 space-y-3">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="amount"
                      className="font-semibold text-neutral-500 py-2 text-sm"
                    >
                      Entry Amount
                    </label>
                    <div className="flex items-center gap-2 py-2 border border-teal-500 px-2 rounded">
                      <Fa.FaDollarSign className="text-black" />
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        onChange={(e: any) => setAmount(e.target.value)}
                        className="w-full bg-transparent text-black outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <p className="text-sm font-semibold text-neutral-500">
                    Mini Trading Amount
                  </p>
                  <h4 className="my-1 font-semibold">{formatCurrency(300)}</h4>
                </div>
                <div>
                  <label
                    htmlFor="duration"
                    className="font-semibold text-neutral-500 py-2 text-sm"
                  >
                    Duration
                  </label>
                  <div className="flex flex-col space-y-3">
                    <select
                      name="country"
                      id="country"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="border border-teal-500 p-3 rounded outline-none text-black"
                    >
                      <option value="24 hours">24 hours</option>
                      <option value="4 days">4 days</option>
                      <option value="7 days">7 days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* end of form component */}
            {/* button */}
            <div>
              <button
                onClick={() => setShow(true)}
                className="font-bold py-3 my-4 text-sm w-full px-3 uppercase rounded text-black bg-teal-400"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <TradingModal hide={show} setHide={setShow} tradingFunction={addOrders} />
    </>
  );
};


export default VolumeTradingPlan;
