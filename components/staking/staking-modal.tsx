import { Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { stakingOptions } from "../../lib/staking-options";
import {
  doc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/useFetchUser";
import { formatCurrency } from "../../utils/formatCurrency";
import { toast } from "react-toastify";
import TradingModal from "../../shared/modal/trading-modal";

interface ModalProps {
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const StakingModal = ({ visible, setVisible }: ModalProps) => {
  const [amount, setAmount] = useState<string | number | any>();
  const [plan, setPlan] = useState<string | number>("USDT");
  const [selectedPlan, setSelectedPlan] = useState<any>();
  const [show, setShow] = useState(false);

  const { user }: any = useContext(UserContext);
  const { userState: state }: any = useFetchUser();

  const router = useRouter();

  const selectPlan = () => {
    const findPlan = stakingOptions.find(
      (stakingOption) => stakingOption.plan == plan
    );

    setSelectedPlan(findPlan);
  };

  useMemo(() => {
    selectPlan();
  }, [plan]);

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

  const updateStakingPlan = async (e: any) => {
    if (state.MainAccount < amount) {
      return toast("Insufficient Balance,Please Deposit", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }

    try {
      if (parseInt(amount) < selectedPlan.min) {
        toast(
          `Amount Should not be less than ${formatCurrency(selectedPlan.min)}`,
          {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          }
        );

        return;
      }

      const docRef = doc(store, "users", `${user.email}`);
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "/staking"
      );

      await addDoc(collectionRef, {
        amount,
        plan,
        apr: selectedPlan.apr,
        duration: selectedPlan.duration,
        date: serverTimestamp(),
      });

      await updateDoc(docRef, {
        StakingAccount: amount,
        plan,
        MainAccount: state.MainAccount - amount,
      });
      setVisible(false);
      setShow(false);
      router.reload();
    } catch (error: unknown | any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          visible
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto relative my-12 bg-bg font-main text-white rounded-md shadow-md p-4">
          <div className="absolute top-0 right-0 p-2">
            <FaTimes onClick={() => setVisible(false)} />
          </div>
          {/* parent flex div */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-6 self-center">
              <FcBriefcase size="8rem" />
            </div>
            <div className="w-full">
              <label
                htmlFor="amount"
                className="font-sec my-2 text-neutral-400"
              >
                Enter Amount
              </label>
              <div className="flex items-center bg-neutral-300 py-3 px-1 rounded mt-2 gap-2">
                <FiDollarSign className="stroke-bg" />
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent text-bg outline-none px-2"
                />
              </div>
            </div>
            <div className="w-full my-4">
              <label
                htmlFor="staking option"
                className="font-sec my-2 text-neutral-400"
              >
                Staking Option
              </label>
              <div className="flex items-center bg-neutral-300 py-3 px-1 rounded mt-2 gap-2">
                <select
                  name="option"
                  id="option"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full bg-transparent text-bg focus:outline-none px-2"
                >
                  {stakingOptions.map((stakingOption) => (
                    <option key={stakingOption.id} value={stakingOption.plan}>
                      {stakingOption.plan}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={openModal}
              className="mt-4 inline-block w-full font-sec bg-card text-white py-2 rounded"
            >
              Stake Now
            </button>
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
