import { FaTimes } from "react-icons/fa";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { doc, updateDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface WalletModalTypes {
  hide: Boolean;
  setHide: any;
}

const coins = ["bitcoin", "ethereum", "solana", "Tron", "USDT"];

const WalletModal = ({ hide, setHide }: WalletModalTypes) => {
  const [coin, setCoin] = useState<string>("bitcoin");
  const [address, setAddress] = useState("");
  const [selected, setSelected] = useState<string | undefined>();

  useMemo(() => {
    const matched = coins.find((coi) => coi.match(coin));
    setSelected(matched);
  }, [coin]);

  const { user }: any = useContext(UserContext);

  const router = useRouter();

  const updateWallet = async (e: any) => {
    e.preventDefault();
    if (!address) {
      return toast(`Enter ${selected} address`, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
    try {
      const docRef = doc(store, "users", `${user.email}`);
      await updateDoc(docRef, {
        [`${selected}_address`]: address,
      });

      setHide(false);
      router.reload();
    } catch (error: any) {
      toast(error.code, {
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
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] text-white font-main md:w-[40%] mx-auto my-12 bg-bg rounded-md relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 font-semibold text-xl capitalize underline underline-offset-2">
              Update Wallet Address
            </h2>
          </div>
          {/* form  */}
          <form>
            {/* selected */}
            <div>
              <label htmlFor="coin" className="py-2 text-sm">
                Selected Coin
              </label>
              <div className="w-full bg-neutral-300 py-2 rounded">
                <select
                  name="coin"
                  id="coin"
                  value={coin}
                  onChange={(e) => setCoin(e.target.value)}
                  className="w-full bg-transparent text-bg outline-none"
                >
                  {coins.map((coin) => (
                    <option key={coin} value={coin}>
                      {coin}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="enter address">Enter {selected} address</label>
              <div className="bg-neutral-300 rounded py-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  className="bg-transparent outline-none text-bg px-2"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={updateWallet}
              className="inline-block w-full mt-6 font-sec py-2 bg-card text-white rounded"
            >
              Update Wallet
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WalletModal;
