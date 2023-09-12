import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const MerchantModal = ({ open, close }: any) => {
  return (
    <section
      className={
        open
          ? "absolute w-screen h-screen backdrop-blur-sm bg-black/30 z-30 top-0 left-0"
          : "hidden"
      }
    >
      <div className="w-[90%] md:w-[60%] mx-auto bg-slate-800 my-8 p-3 rounded shadow">
        <div className="absolute top-0 right-0 p-4">
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => close(false)}
          />
        </div>
        <h4 className="text-center font-bold text-2xl capitalize">
          go to merchant verification
        </h4>
        <Link
          className="bg-teal-500 rounded w-full inline-block my-4 py-4 text-xl text-center"
          href="/merchant-verification"
        >
          Verify Now
        </Link>
      </div>
    </section>
  );
};

export default MerchantModal;
