import React, { useContext, useEffect, useMemo, useState } from "react";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import { addresses } from "../../lib/wallet-address";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useFetchUser } from "../../hooks/useFetchUser";
import { getAddress } from "../../utils/getAddresss";

// Parent form component
const DepositForm = () => {
  return (
    <section className="py-3 px-2 flex-1 w-full">
      <div>
        <h3 className="font-medium text-base md:text-xl  underline">
          Deposit Crypto
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
  // fetch the user
  const { userState: user }: any | unknown = useFetchUser();
  const [coinId, setCoinId] = useState(1);
  const [amount, setAmount] = useState(0);
  const [showCoinModal, setCoinModal] = useState(false);
  const [defaultCoin, setDefaultCoin] = useState<null | any>(null);
  const [showBarCode, setBarCode] = useState(false);

  const id = user?.deposit_address ? user?.deposit_address : 1;
  let walletAddress: [] | any = getAddress(id);
  let coins = walletAddress.find((wallet: any) => wallet.id == coinId);

  useMemo(() => {
    setDefaultCoin(coins);
  }, [user?.deposit_address, id]);

  const router = useRouter();

  // user context
  const { user: state }: any = useContext(UserContext);

  // copy address
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("copied address", {
      position: "top-center",
      bodyClassName: "toast",
    });
  };

  // function to submit to firebase
  async function DepositMoney(e: any) {
    e.preventDefault();
    if (!amount) {
      return toast.error("Please Enter an amount", {
        theme: "colored",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/deposits"
      );

      // collectionRef
      const depositCollectionRef = collection(store, "/deposits");

      await addDoc(depositRef, {
        amount: amount,
        date: serverTimestamp(),
        coin: defaultCoin.sym,
        network: defaultCoin.network,
        address: defaultCoin.address,
        hash: "",
        approved: false,
        fee: 0,
      });

      // Create new Withdrawal collection
      await addDoc(depositCollectionRef, {
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
      <section>
        <div className="my-3 space-y-6">
          {/* coin */}
          <div>
            <p className="font-semibold text-neutral-400">Coin</p>
            <div
              onClick={() => setCoinModal(true)}
              className="flex justify-between items-center my-2 cursor-pointer border border-teal-400 rounded-lg"
            >
              <div className="flex items-center w-full px-2 py-3">
                <div className="md:w-[4%] w-[5%]">
                  <img src={defaultCoin?.logo} className="rounded-full" />
                </div>
                <h1 className="mx-2 font-bold text-xs text-black">
                  {defaultCoin?.name}
                </h1>
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
            <div className="flex justify-between items-center my-2 cursor-pointer border border-teal-400  py-3 px-2 rounded">
              <div className="flex items-center">
                <h1 className="mx-2 font-bold text-black">
                  {defaultCoin?.network}
                </h1>
              </div>
            </div>
          </div>
          {/* end of network */}
          {/* wallet details */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-bold text-neutral-600">Address</h3>
              <p className="font-bold text-sm text-black break-all">
                {defaultCoin?.address}
              </p>
            </div>
            <div>
              <Fa.FaClipboardCheck
                className="cursor-pointer text-neutral-300"
                onClick={() => copyAddress(defaultCoin.address)}
              />
            </div>
          </div>
          <h4
            className="font-bold capitalize text-black text-xs cursor-pointer"
            onClick={() => setBarCode(true)}
          >
            bar code
          </h4>
          {/* amount input field */}
          <div className="flex border border-teal-500 text-black items-center py-3 px-2 rounded">
            <Fa.FaDollarSign />
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              className="outline-none w-full px-2 bg-transparent"
            />
          </div>
          <button
            onClick={DepositMoney}
            className="bg-teal-600 shadow rounded px-4 py-2"
          >
            Deposit
          </button>
          {/* end of wallet details */}
        </div>
      </section>
      <CoinModal show={showCoinModal} close={setCoinModal} coin={setCoinId} />

      <BarCodeModal show={showBarCode} close={setBarCode} coin={defaultCoin} />
    </>
  );
};

// network Details
const Details = () => {
  return (
    <div className="my-8 space-y-6">
      <div>
        <h4 className="font-semibold text-neutral-400 my-1 text-sm">
          Recipient Account
        </h4>
        <h4 className="font-semibold text-black text-sm">Main Account</h4>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="my-1 font-semibold text-neutral-400 text-sm">
            Deposit Confirmation
          </h4>
          <h4 className="font-semibold text-black text-sm">3 Block(s)</h4>
        </div>
        <div>
          <h4 className="my-1 font-semibold text-neutral-400 text-sm">
            Withdrawal Confirmation
          </h4>
          <h4 className="font-semibold text-black text-sm">3 Blocks(s)</h4>
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
            <h4 className="font-bold underline text-2xl">Coin</h4>
            <Md.MdClose onClick={() => close(false)} />
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
                      <h4 className="capitalize font-semibold">
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
            <Md.MdClose onClick={() => close(false)} size={30} />
          </div>
          <img src={coin?.img} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default DepositForm;
