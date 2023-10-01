import { Dispatch, SetStateAction, useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { collection, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { store } from "../../firebase";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/useFetchUser";
import { formatCurrency } from "../../utils/formatCurrency";
import { toast } from "react-toastify";
import TradingModal from "../../shared/modal/trading-modal";
import Link from "next/link";
import { UserContext } from "../../context/UserContext";

interface ModalProps {
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  data: any;
}

const StakingModal = ({ visible, setVisible, data }: ModalProps) => {
  const [amount, setAmount] = useState<string | number | any>();
  const [show, setShow] = useState(false);

  const { userState: state }: any = useFetchUser();
  const { user }: any = useContext(UserContext);

  // calculate profit
  const calculateProfit = () => {
    let profit;
    switch (data?.roi) {
      case "60%":
        return (profit = parseInt(amount) + parseInt(amount) * 0.6);
      case "100%":
        return (profit = parseInt(amount) + parseInt(amount) * 1);
      default:
        return (profit = parseInt(amount) + parseInt(amount) * 1.5);
    }
  };

  let date = new Date();
  // function to change Accrual Date
  const toChangeAccrualDate = (duration:String | number = 14 )=>{
    switch (duration){
      case '14':
        return date.setDate(date.getDate() + 14)
      case '30':
        return date.setMonth(date.getMonth() + 1)
      case "60":
        return date.setMonth(date.getMonth()+ 2)
    }
  } 
  let profit = calculateProfit();
  let accrualDate:undefined | Date | number |any = toChangeAccrualDate(data?.duration)



  const router = useRouter();

  const openModal = (e: any) => {
    e.preventDefault();
    if (!amount) {
      toast("Amount is empty", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }
    setShow(true);
  };

  const updateStakingPlan = async () => {
    // check if the amount is less than the minimum amount
    if (amount < data?.min) {
      return toast("Amount is less than minimum", {
        position: "top-center",
        theme: "colored",
        bodyClassName: "toast",
        type: "error",
      });
    }

    // check if the amount is greater than that in Main account
    if (amount > state?.MainAccount) {
      return toast("Please Fund Account", {
        position: "top-center",
        theme: "colored",
        bodyClassName: "toast",
        type: "error",
      });
    }
    try {
      // create collection ref
      const collectionRef = collection(
        store,
        "/users",
        `${user.email}`,
        "staking"
      );
      const docRef = collection(store, "staking");
      const userRef = doc(store, "/users", `${user.email}`);
      // create the new collection
      await addDoc(collectionRef, {
        plan: data?.plan,
        network: data?.network,
        amount,
        start_date: new Date().toDateString(),
        profitDate: new Date(accrualDate).toDateString(),
        profit:profit
      });

      // Add staking collection
      await addDoc(docRef, {
        plan: data?.plan,
        network: data?.network,
        amount,
        start_date: new Date().toDateString(),
        profitDate: new Date(accrualDate).toDateString(),
        email: user.email,
        profit:profit
      });

      // update the user account 
      await updateDoc(userRef,{
        MainAccount:increment(-amount),
        StakingAccount:increment(+amount)
      })

      await fetch("/api/staking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          start_date:new Date().toDateString(),
          accrual_date:new Date(accrualDate).toDateString(),
          profit_date:new Date(accrualDate).toDateString(),
          duration:data?.duration,
          returns:formatCurrency(profit),
          apr:data?.roi,
          plan:data?.plan,
          amount:formatCurrency(amount)
        }),
      });

      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          visible
            ? "fixed top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[90%] md:w-[60%] mx-auto relative my-3 bg-neutral-100 font-main rounded-lg shadow p-4 md:p-8">
          <div className="absolute top-0 right-0 p-4">
            <FaTimes onClick={() => setVisible(false)} />
          </div>
          {/* parent flex div */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Form */}
            <div className="flex-1 space-y-5">
              {/* header */}
              <div className="flex items-center gap-4">
                <div className="w-[40px]">
                  <img src={data?.image} alt="" />
                </div>
                <h4 className="font-bold text-xl">Staking</h4>
              </div>
              {/* APR */}
              <div>
                <div className="flex items-stretch justify-between">
                  <h4 className="font-semibold text-neutral-400">APR</h4>{" "}
                  <p className="font-semibold">{data?.roi}</p>
                </div>
              </div>
              {/* Term */}
              <div>
                <div className="flex items-stretch justify-between">
                  <h4 className="font-semibold text-neutral-400">Term</h4>{" "}
                  <p className="font-semibold">fixed</p>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="font-bold text-xl">Amount</h4>
                {/* form field */}
                <div className="my-3">
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border border-neutral-400 outline-none p-3 rounded bg-transparent"
                  />
                </div>
                {/* Account */}
                <div>
                  <div className="flex items-stretch justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Minimum Amount
                    </h4>{" "}
                    <p className="font-semibold">{formatCurrency(data?.min)}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-stretch justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Funding Account
                    </h4>{" "}
                    <p className="font-semibold">
                      {formatCurrency(state?.MainAccount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            {/* Preview */}
            <div className=" p-3 flex-1">
              {/* Header */}
              <h4 className="font-bold text-black text-xl">Preview</h4>
              {/* Dates */}
              <section className="space-y-2 my-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Subscription Date
                    </h4>{" "}
                    <p className="font-semibold">{new Date().toDateString()}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Accrual Date
                    </h4>{" "}
                    <p className="font-semibold">
                      {new Date(accrualDate).toDateString()}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Profit Distribution Date
                    </h4>{" "}
                    <p className="font-semibold">
                      {new Date(accrualDate).toDateString()}
                    </p>
                  </div>
                </div>
              </section>
              {/* Dates */}
              <section className="space-y-2 my-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Redemption Period
                    </h4>{" "}
                    <p className="font-semibold">{data?.duration}days</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Profit Received
                    </h4>{" "}
                    <p className="font-semibold">Daily</p>
                  </div>
                </div>
              </section>
              {/* Returns */}
              <section className="space-y-6">
                <h4 className="font-semibold text-xl">Estimated Returns</h4>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-neutral-400">Earnings</h4>{" "}
                  <p className="font-semibold">
                    {!amount ? formatCurrency(0) : formatCurrency(profit)}
                  </p>
                </div>
              </section>
              {/* submit button */}
              <button
                onClick={openModal}
                className="bg-teal-600 p-3 w-full rounded-full my-3 text-white capitalize font-bold"
              >
                subscribe
              </button>
              {/* Terms and agreement */}
              <div className="flex items-center gap-2">
                <p className="text-sm capitalize">
                  I have read and agree to the{" "}
                  <Link
                    href="/mining-agreement"
                    className="text-teal-600 font-semibold"
                  >
                    {" "}
                    cryptocurrency mining agreement
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TradingModal
        hide={show}
        setHide={setShow}
        tradingFunction={updateStakingPlan}
      />
    </>
  );
};

export default StakingModal;
