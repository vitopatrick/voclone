import { AiFillHome } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { bucket, store } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

interface UserModalTypes {
  hide: Boolean;
  setHide: any;
}

const UserModal = ({ hide, setHide }: UserModalTypes) => {
  const [homeAddress, setHomeAddress] = useState("");
  const [photo, setPhoto] = useState<any>("");

  const { user: state }: any = useContext(UserContext);
  const router = useRouter();

  // handle verification
  const submitVerification = async (e: any) => {
    // prevent Browser Default
    e.preventDefault();

    // check if the forms are Empty
    if (!homeAddress || !photo.name) {
      toast("Please form correctly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }

    

    try {
      // upload Image
      const imgRef = ref(bucket, `proofImg/${photo.name}`);

      // update the document
      const userRef = doc(store, "users", `${state.email}`);
      await updateDoc(userRef, {
        verfied: true,
        address: homeAddress,
      });
      // hide modal
      setHide(false);
      toast(e.code, {
        type: "success",
        position: "bottom-center",
        bodyClassName: "toast",
      });

      // sent api request

      await fetch("/api/verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
        }),
      });

      router.push("/account-profile");
      // upload address
      await uploadBytes(imgRef, photo);
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
            <h2 className="py-3 font-medium text-white text-xl capitalize underline">
              Please Provide the following for verification
            </h2>
          </div>
          {/* form  */}
          <form>
            {/* enter address */}
            <div>
              <label htmlFor="address" className="text-white text-sm">
                Home Address
              </label>
              <div className="bg-neutral-300 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className="w-full bg-transparent font-sec px-2 focus:outline-none text-bg"
                />
                <AiFillHome className="fill-card" />
              </div>
            </div>
            {/* implement Drag and drop */}
            <div className="mt-8">
              <label htmlFor="picture" className="text-sm text-white py-2">
                Picture of Workers ID,Driver license or National ID
              </label>
              <div className="rounded">
                <input
                  type="file"
                  name="id"
                  id="id"
                  onChange={(e: any) => setPhoto(e.target.files[0])}
                  className="text-white"
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={submitVerification}
              className="inline-block w-full mt-6 font-medium py-2 bg-card text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserModal;
