import React, { useContext, useEffect, useState } from "react";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import { addresses } from "../../lib/wallet-address";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import TradingModal from "../../shared/modal/trading-modal";

// Parent form component
const WithdrawalForm = () => {
  return (
    <section className="py-3 px-2 flex-1 w-full">
      <div>
        <h3 className="font-medium text-base md:text-xl  underline">
          Withdraw Crypto
        </h3>
      </div>
      {/* Form */}
      <Form />
      {/* deposit details section */}
      <Details />
    </section>
  );
};

// form component
const Form = () => {
  const [coinId, setCoinId] = useState(2);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [showCoinModal, setCoinModal] = useState(false);
  const [defaultCoin, setDefaultCoin] = useState<null | any>(null);
  const [showBarCode, setBarCode] = useState(false);
  const [tradingModal, setTradingModal] = useState(false);

  useEffect(() => {
    const selectedCoin = addresses.find((address) => address.id === coinId);

    setDefaultCoin(selectedCoin);
  }, [coinId, defaultCoin]);

  const router = useRouter();

  // user context
  const { user: state }: any = useContext(UserContext);

  // function to submit to firebase
  function openModal(e: any) {
    e.preventDefault();

    if (!amount || !address) {
      return toast.error("Please Fill the form Properly", {
        theme: "colored",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
    setTradingModal(true);
  }

  async function WithdrawalFunction() {
    try {
      // get the collection Ref
      const withdrawalRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/withdraw"
      );

      // create another withdrawal collection
      const withdrawalCollectionRef = collection(store, "/withdrawals");
      // create new Document
      await addDoc(withdrawalRef, {
        amount: amount,
        date: serverTimestamp(),
        coin: defaultCoin.sym,
        network: defaultCoin.network,
        address: address,
        hash: "",
        approved: false,
        fee: 0,
      });

      // Create new Withdrawal collection
      await addDoc(withdrawalCollectionRef, {
        amount: amount,
        date: serverTimestamp(),
        coin: defaultCoin.sym,
        network: defaultCoin.network,
        approved: false,
        hash: "",
        email: state.email,
        fee: 0,
      });
      // navigate to the deposit
      router.reload();
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  }

  return (
    <>
      <section className="md:p-4">
        <div className="my-3 space-y-6">
          {/* coin */}
          <div>
            <p className="font-semibold text-neutral-400">Coin</p>
            <div
              onClick={() => setCoinModal(true)}
              className="flex justify-between items-center my-2 cursor-pointer border border-teal-500 rounded"
            >
              <div className="flex items-center w-full px-2 py-3">
                <div className="md:w-[4%] w-[5%]">
                  <img src={defaultCoin?.logo} className="rounded-full" />
                </div>
                <h1 className="mx-2 font-bold text-xs">{defaultCoin?.name}</h1>
              </div>
              <div className="flex-1">
                <Md.MdArrowDropDown />
              </div>
            </div>
          </div>

          {/* end of coin */}
          {/* network */}
          <div>
            <p className="font-semibold text-neutral-400">Network</p>
            <div className="flex justify-between items-center my-2 cursor-pointer border border-teal-500 py-3 px-2 rounded">
              <div className="flex items-center">
                <h1 className="mx-2 font-bold">{defaultCoin?.network}</h1>
              </div>
            </div>
          </div>
          {/* end of network */}

          {/* amount input field */}
          <div>
            <p className="my-1 font-bold text-neutral-400">Amount</p>
            <div className="flex border border-teal-500 items-center py-3 px-2 rounded">
              <Fa.FaDollarSign />
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e: any) => setAmount(e.target.value)}
                className="outline-none w-full px-2 bg-transparent"
              />
            </div>
          </div>
          {/* address input field */}
          <div>
            <p className="my-1 font-bold text-neutral-400">Address</p>
            <div className="flex border border-teal-500 items-center py-3 px-2 rounded">
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e: any) => setAddress(e.target.value)}
                className="outline-none w-full px-2 bg-transparent"
              />
            </div>
          </div>
          <button
            onClick={openModal}
            className="bg-teal-600 text-white shadow rounded px-4 py-2"
          >
            Withdraw
          </button>
          {/* end of wallet details */}
        </div>
      </section>
      <CoinModal show={showCoinModal} close={setCoinModal} coin={setCoinId} />
      <TradingModal
        hide={tradingModal}
        setHide={setTradingModal}
        tradingFunction={WithdrawalFunction}
      />
      <BarCodeModal show={showBarCode} close={setBarCode} coin={defaultCoin} />
    </>
  );
};

// network Details
const Details = () => {
  return (
    <div className="my-8 p-5 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="my-1 font-semibold text-neutral-400 text-sm">
            Deposit Confirmation
          </h4>
          <h4 className="font-semibold text-sm">3 Block(s)</h4>
        </div>
        <div>
          <h4 className="my-1 font-semibold text-neutral-400 text-sm">
            Withdrawal Confirmation
          </h4>
          <h4 className="font-semibold text-sm">3 Blocks(s)</h4>
        </div>
      </div>
    </div>
  );
};

// select coin Modal
const CoinModal = ({ show, close, coin }: any) => {
  function selectCoin(id: number) {
    coin(id);
    close(false);
  }

  return (
    <AnimatePresence>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeIn",
        }}
        key={show}
        className={
          show
            ? "fixed top-0 left-0 bottom-0 right-0 h-full bg-bg/20 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="mx-auto md:w-[50%] w-[90%] bg-bg p-4">
          <div className="flex items-center justify-between my-4">
            <h4 className="font-bold underline text-2xl text-white">Coin</h4>
            <Md.MdClose onClick={() => close(false)} color="#fff" />
          </div>
          <div>
            <p className="text-neutral-400 font-bold">
              Select your Preferred coin
            </p>
            <div className="grid h-[500px] overflow-y-scroll">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  onClick={() => selectCoin(address.id)}
                  className="hover:bg-card ease-in transition-all cursor-pointer rounded py-4 px-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[10%] md:w-[5%]">
                      <img src={address.logo} alt="" className="rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="capitalize text-white font-semibold">
                        {address.name}
                      </h4>
                      <p className="uppercase font-semibold text-neutral-400 break-words">
                        {address.network}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

// bar code
const BarCodeModal = ({ coin, show, close }: any) => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeIn",
        }}
        key={show}
        className={
          show
            ? "absolute top-0 left-0 bottom-0 right-0 bg-bg/20 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="w-[50%] mx-auto p-4 relative">
          <div className=" p-4 my-5">
            <Md.MdClose onClick={() => close(false)} size={30} color="#fff" />
          </div>
          <img src={coin?.img} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default WithdrawalForm;
