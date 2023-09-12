import { FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { store } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import OTPInput from "react-otp-input";

interface UserTradingModalTypes {
  hide: Boolean;
  setHide: any;
  heading: Boolean;
}

const UserTradingModal = ({
  hide,
  setHide,
  heading,
}: UserTradingModalTypes) => {
  const [tradingPassword, setTradingPassword] = useState("");

  const { user: state }: any = useContext(UserContext);
  const router = useRouter();

  // handle verification
  const submitVerification = async (e: any) => {
    // prevent Browser Default
    e.preventDefault();

    // check if the forms are Empty
    if (!tradingPassword) {
      toast("Please form correctly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }
    try {
      // update the document
      const userRef = doc(store, "users", `${state.email}`);
      await updateDoc(userRef, {
        tradingPassword,
      });
      setHide(false);
      router.push("/account-profile");
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <AnimatePresence>
      {/* parent div positioned absolute */}
      <motion.div
        key={hide ? 1 : 0}
        variants={{
          start: {
            opacity: 0,
            scale: 0,
          },
          end: {
            opacity: 1,
            scale: 1,
          },
          exit: {
            opacity: 0,
            scale: 0,
          },
        }}
        initial="start"
        animate="end"
        exit="exit"
        transition={{
          duration: 0.2,
        }}
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-bg rounded-md font-variable relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="py-3 font-semibold text-center text-white text-xl capitalize underline">
              {heading ? "Change Password" : "Add Trading Password"}
            </h2>
          </div>
          {/* form  */}
          <form>
            <div className="flex items-center justify-center">
              <OTPInput
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
            {/* submit button */}
            <button
              onClick={submitVerification}
              className="inline-block w-full mt-6 font-sec py-2 bg-teal-600 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserTradingModal;
