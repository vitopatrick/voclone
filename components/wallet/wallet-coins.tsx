import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";
import { useFetchUser } from "../../hooks/useFetchUser";
import Loading from "../../shared/loading/Loading";
import {
  Sub,
  convertCoin,
  convertCurrency,
  getSum,
} from "../../utils/formatCurrency";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { CiBitcoin } from "react-icons/ci";
import { useRouter } from "next/router";
import * as Md from "react-icons/md";

const WalletCoins = () => {
  const { userState: user, loading }: any = useFetchUser();
  const { coins: main, loading: boolean } = useFetchAllCoins();

  const router = useRouter();

  const coins = [
    {
      id: 1,
      coin: "tron",
      img: "/tron.png",
      quantity: user?.tron ? user?.tron : 0,
      sym: "trx",
      amount: convertCurrency(main, user?.tron ? user?.tron : 0, "TRX"),
    },
    {
      id: 2,
      coin: "USDT",
      img: "/usdt.png",
      quantity: user?.usdt ? user?.usdt : 0,
      sym: "usdt",
      amount: convertCurrency(main, user?.usdt ? user?.usdt : 0, "USDT"),
    },
    {
      id: 3,
      coin: "Bitcoin",
      img: "/btc.png",
      sym: "btc",
      quantity: user?.btc ? user?.btc : 0,
      amount: convertCurrency(main, user?.btc ? user?.btc : 0, "BTC"),
    },
    {
      id: 4,
      coin: "Ethereum",
      img: "/eth.png",
      quantity: user?.eth ? user?.eth : 0,
      sym: "eth",
      amount: convertCurrency(main, user?.eth ? user?.eth : 0, "ETH"),
    },
  ];

  return (
    <section className="font-main mx-2 my-8">
      <div className="flex items-center gap-3">
        <div className="bg-teal-200 rounded p-2">
          <Md.MdArrowBack
            size={20}
            className="cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
        <h4 className="text-xl font-semibold text-black">Assets</h4>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4 px-2 py-3 rounded-t bg-neutral-100 font-bold">
        <div>Coin</div>
        <div>Quantity</div>
        <div>Amount($)</div>
      </div>
      {loading && <Loading />}
      {!loading &&
        coins.map((coin) => (
          <div className="grid grid-cols-3 gap-3 px-2 py-3 ">
            <div className="flex items-center md:gap-3 rounded cursor-pointer">
              <div className="w-[18%] md:w-[10%] mr-2">
                <img src={coin.img} alt={coin.coin} className="rounded-full" />
              </div>
              <div>
                <p className="font-semibold text-black capitalize">
                  {coin.coin}
                </p>
                <p className="font-semibold uppercase my-2 text-neutral-400 text-xs">
                  {coin.sym}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-black">
                {coin?.quantity ? coin?.quantity : 0}
              </div>
              <div className="uppercase font-bold text-black">{coin.sym}</div>
            </div>
            <div className="text-black font-bold">
              {loading ? "...Loading" : coin.amount}
            </div>
          </div>
        ))}
      <ConvertCoin convert={coins} main={main} user={user} />
    </section>
  );
};

const ConvertCoin = ({ convert, main, user: state }: any) => {
  const [to, setTo] = useState<string>("btc");
  const [from, setFrom] = useState<string>("trx");
  const [amount, setAmount] = useState<number | string | any>();

  const { user }: any = useContext(UserContext);
  const router = useRouter();

  // convert the currency.
  const convertCurrency = async (e: any) => {
    // Prevent Default Browser behavior
    e.preventDefault();

    // check if the amount is valid
    if (!amount) {
      return toast("Enter Amount of coin", {
        position: "bottom-center",
        bodyClassName: "toast",
        type: "error",
      });
    }

    // check that users selected a coin to trade
    if (!to || !from) {
      return toast("Please Select coin", {
        position: "bottom-center",
        bodyClassName: "toast",
        type: "error",
      });
    }

    /**
     * @returns the current value of the traded coin
     * @param list_of_coins,
     * @param amount
     * @param convert_from
     * @param convert_to
     */
    const converted = convertCoin(
      main,
      amount,
      to.toUpperCase(),
      from.toUpperCase()
    );
    // check if the select coin is Tron, then change the value of the selected coin
    const convertTo = to === "trx" ? "tron" : to;
    const convertFrom = from === "trx" ? "tron" : from;

    // get the value of the selected fields from the user database
    const convertFromValue: any = Object.entries(state).find(
      (value) => value[0] === convertFrom
    );

    const convertToValue: any = Object.entries(state).find(
      (value) => value[0] === convertTo
    );

    try {
      // if the amount to be converted to is larger than the amount available in the wallet
      // send the error handler
      if (convertFromValue[1] < amount) {
        return toast("You do not have enough coin in your wallet", {
          type: "error",
          position: "bottom-center",
          bodyClassName: "toast",
        });
      }
      // this is the user reference
      const userRef = doc(store, "users", `${user.email}`);

      // Toast Successful message
      toast(
        `Conversion of ${amount}${convertFromValue[0]} to ${convertToValue[0]} was successful`,
        {
          bodyClassName: "toast",
          position: "bottom-center",
          type: "success",
        }
      );

      // update the data in firebase
      await updateDoc(userRef, {
        [convertToValue[0]]: getSum(+converted.result, convertToValue[1]),
        [convertFromValue[0]]: Sub(convertFromValue[1], amount),
      });
    } catch (error: any) {
      toast(error.code, {
        position: "bottom-center",
        type: "error",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <section className="my-6">
      <div className="font-semibold text-xl text-black underline">Convert</div>
      <label htmlFor="warning" className="text-red-600 my-2 text-sm capitalize">
        Please enter the quantity of coins
      </label>
      <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between my-2">
        <div className="flex-1">
          <label htmlFor="quantity">Quantity</label>
          <div className="bg-white border border-teal-400 text-black rounded py-2 px-1 mt-2 flex flex-row-reverse items-center gap-2">
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <CiBitcoin />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="convert from">From</label>
          <div className="w-full bg-white text-black border border-teal-500 rounded mt-1 py-2 px-1">
            <select
              name="coin_from"
              className="w-full bg-transparent outline-none"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {convert.map((con: any) => (
                <option value={con.sym}>{con.coin}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="convert from">To</label>
          <div className="w-full bg-white text-black border border-teal-500 rounded mt-1 py-2 px-1">
            <select
              name="coin_from"
              className="w-full bg-transparent outline-none"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {convert.map((con: any) => (
                <option value={con.sym}>{con.coin}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button
        className="w-fit px-3 py-2 bg-teal-600 rounded font-semibold"
        onClick={convertCurrency}
      >
        Convert
      </button>
    </section>
  );
};

export default WalletCoins;
