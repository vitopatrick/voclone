import { FaStoreAlt } from "react-icons/fa";
import { AiTwotoneBank, AiOutlineWarning } from "react-icons/ai";
import { FcDownload } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const BecomeAMerchant = () => {
  const [active, setActive] = useState(0);
  return (
    <IconContext.Provider value={{ size: "1.4rem", color: "#fff" }}>
      <main className="font-main text-white w-[90%] md:w-[65%] mx-auto bg-bg rounded shadow-md p-10">
        <header className="text-center font-bold text-3xl">
          Merchant Verification
        </header>
        <section>
          <div className="flex gap-10 items-center justify-center my-4">
            <div className="h-[50px] w-[50px] rounded-full border border-teal-500 flex items-center justify-center">
              <FaStoreAlt />
            </div>
            <div className="h-[50px] w-[50px] rounded-full border border-teal-500 flex items-center justify-center">
              <AiTwotoneBank />
            </div>
          </div>
          {active == 0 && <BecomeAMerchantForm />}
          {active == 1 && <DepositForm />}
        </section>
      </main>
    </IconContext.Provider>
  );
};

function BecomeAMerchantForm() {
  const [fullName, setFullName] = useState("");
  const [home, setHome] = useState("");
  const [file, setFile] = useState<[] | any>([]);

  return (
    <section className="my-8">
      {/* alert box section */}
      <div className="capitalize p-3 border border-teal-700 rounded bg-teal-50/20 flex gap-2 items-center">
        <div>
          <AiOutlineWarning />
        </div>
        please make sure you fill out the form correctly
      </div>
      <form>
        {/* container for the first name and address */}
        <div className="flex md:flex-row flex-col gap-3 my-6">
          {/* full name container */}
          <div className="flex-1">
            <label htmlFor="full name">Full Name</label>
            <div className="bg-neutral-200 py-4 rounded w-full">
              <input
                type="text"
                name="full_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-transparent px-2 text-bg outline-none"
              />
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="Address">Home Address</label>
            <div className="bg-neutral-200 py-4 rounded w-full">
              <input
                type="text"
                name="home_address"
                value={home}
                onChange={(e) => setHome(e.target.value)}
                className="w-full bg-transparent px-2 outline-none text-bg"
              />
            </div>
          </div>
          {/* end of full name container */}
        </div>
        {/* end of container */}
        {/* the drag and drop feature */}

        {/* end of drag and drop filter */}
        {/* submit button for the form */}
        <button className="w-full inline-block py-3 bg-teal-400 rounded text-xl">
          Submit
        </button>
        {/* end of submit button */}
      </form>
    </section>
  );
}

function DepositForm() {
  return (
    <section>
      <div className="capitalize p-3 border border-teal-700 rounded bg-teal-50/20 flex gap-2 items-center">
        <div>
          <AiOutlineWarning />
        </div>
        Please Make a minimum Deposit of USDT 40,000 to activate your merchant
        account
      </div>
      <form>
        <div className="my-3">
          <label htmlFor="select coin" className="mb-8">
            Select Coin
          </label>
          <div className="w-full bg-neutral-400 py-3 rounded">
            <select
              name="coins"
              id="coins"
              className="px-2 bg-transparent w-full outline-none text-bg"
            >
              <option value="btc">Bitcoin</option>
              <option value="eth">Ethereum</option>
              <option value="trx">Tron</option>
              <option value="sol">Solana</option>
              <option value="usdt">Tether USDT</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount">Amount</label>
          <div className="w-full bg-neutral-400 py-3 rounded">
            <input
              type="text"
              className="bg-transparent outline-none text-bg px-2"
            />
          </div>
        </div>
        <button className="w-full inline-block py-3 bg-teal-400 rounded text-xl">
          Deposit
        </button>
      </form>
    </section>
  );
}

export default BecomeAMerchant;
