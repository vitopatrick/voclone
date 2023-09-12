import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFetchUser } from "../../hooks/useFetchUser";
import OtpInput from "react-otp-input";
import { AnimatePresence, motion } from "framer-motion";

const TradingModal = ({ hide, setHide, tradingFunction }: any) => {
  const [tradingPassword, setTradingPassword] = useState<string>("");
  const { userState: user }: any = useFetchUser();

  const modalFunction = async (e: any) => {
    e.preventDefault();
    if (!tradingPassword) {
      return toast("Please Enter Trading Password", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    if (!user?.tradingPassword) {
      return toast("Please create a secure password", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    if (tradingPassword != user?.tradingPassword) {
      return toast("password Incorrect", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    try {
      tradingFunction(e);
     toast("Request submitted", {
       bodyClassName: "toast",
       type: "info",
       position: "top-center",
     });
      setHide(false);
    } catch (error) {
      toast("could not process request", {
        bodyClassName: "toast",
        type: "error",
        position: "top-center",
      });
    }
  };

  return (
    <AnimatePresence>
      {/* parent div positioned absolute */}
      <motion.div
        key={hide}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
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
            <h2 className="font-sec py-3 text-center font-semibold text-xl capitalize underline underline-offset-2">
              Trading Password
            </h2>
          </div>
          {/* form  */}
          <form className="my-3">
            <div className="flex items-center justify-center">
              <OtpInput
                value={tradingPassword}
                onChange={setTradingPassword}
                numInputs={4}
                renderSeparator={<span className="text-neutral-400">-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  color: "#000",
                  backgroundColor: "#a3a3a3",
                  fontSize: "28px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <button
              onClick={modalFunction}
              type="submit"
              className="inline-block w-full mt-6 font-sec py-2 bg-teal-400 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TradingModal;
