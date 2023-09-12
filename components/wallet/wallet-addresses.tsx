import { useState } from "react";
import Alert from "../../shared/alerts/Alert";
import WalletModal from "./wallet-modal";
import { useFetchUser } from "../../hooks/useFetchUser";
import { SkeletonText } from "../../shared/skeleton/Skeleton";

const WalletAddress = () => {
  const [hide, setHide] = useState(false);

  const showModal = () => {
    setHide(true);
  };

  const { userState: state, loading }: any = useFetchUser();

  return (
    <>
      <div className="mx-2 font-main text-white">
        <Alert message="click on the add button to add or update your withdrawal wallet addresses" />
        <div className="md:grid md:grid-cols-2 gap-3">
          <div className="bg-bg rounded p-2 my-2 md:my-0">
            <h1 className="font-bold text-paper my-1">Bitcoin</h1>
            {loading && <SkeletonText width={200} height={10} />}
            {!loading && (
              <h2>{state?.bitcoin_address ? state?.bitcoin_address : "N/A"}</h2>
            )}
          </div>
          <div className="bg-bg rounded p-2 my-2 md:my-0">
            <h1 className="font-sec font-bold text-paper my-1">USDT</h1>
            {loading && <SkeletonText width={200} height={10} />}
            {!loading && (
              <h2 className="font-sec">
                {state?.USDT_address ? state?.USDT_address : "N/A"}
              </h2>
            )}
          </div>
          <div className="bg-bg rounded p-2 my-2 md:my-0">
            <h1 className="font-sec font-bold text-paper my-1">Tron</h1>
            {loading && <SkeletonText width={200} height={10} />}
            {!loading && (
              <h2 className="font-sec">
                {state?.Tron_address ? state?.Tron_address : "N/A"}
              </h2>
            )}
          </div>
          <div className="bg-bg rounded p-2 my-2 md:my-0">
            <h1 className="font-sec font-bold text-paper my-1">Ethereum ETH</h1>
            {loading && <SkeletonText width={200} height={10} />}
            {!loading && (
              <h2 className="font-sec">
                {state?.ethereum_address ? state?.ethereum_address : "N/A"}
              </h2>
            )}
          </div>
          <div className="bg-bg rounded p-2 my-2 md:my-0">
            <h1 className="font-sec font-bold text-paper my-1">Solana SOL</h1>
            {loading && <SkeletonText width={200} height={10} />}
            {!loading && (
              <h2 className="font-sec">
                {state?.solana_address ? state?.solana_address : "N/A"}
              </h2>
            )}
          </div>
        </div>
        <button
          onClick={showModal}
          className="my-4 text-gray_bg py-2 px-4 bg-bg rounded font-sec font-semibold shadow-sm"
        >
          Update Address
        </button>
      </div>
      <WalletModal hide={hide} setHide={setHide} />
    </>
  );
};

export default WalletAddress;
