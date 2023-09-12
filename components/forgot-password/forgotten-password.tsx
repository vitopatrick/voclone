import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, store } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const ForgottenPasswordForm = () => {
  const [isText, setIsText] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const updatePassword = async (e: any) => {
    e.preventDefault();
    if (!password) {
      return toast("Please enter the new password", {
        position: "bottom-center",
        bodyClassName: "toast",
        type: "error",
      });
    }
    try {
      await updateDoc(doc(store, "users", email), {
        password,
      });

      toast("Password Updated", {
        type: "success",
        bodyClassName: "toast",
        position: "bottom-center",
      });

      return router.push("/auth/sign-in");
    } catch (error: any) {
      toast(error.code, {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (!email) {
      return toast("Please enter an email address", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast("Email sent,please check inbox or spam,link expires in 30secs", {
        type: "info",
        bodyClassName: "toast",
        position: "bottom-center",
      });
      setShowReset(true);
      return;
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
      {!showReset && (
        <div className="mt-8 w-full md:w-[80%] font-main p-4 mx-auto">
          <form>
            {/* form header */}
            <div>
              <h3 className="text-white md:text-bg text-4xl font-bold">
                Forgot Password
              </h3>
            </div>
            {/* Email or sub account */}
            <div className="flex flex-col mt-8">
              <label
                htmlFor="email"
                className="md:text-sm text-white md:text-bg"
              >
                Email/Sub-Account
              </label>
              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded my-3 font-main flex-1 text-base px-2 py-3 bg-neutral-300 outline-none"
                />
                <button
                  onClick={sendEmail}
                  className="bg-card md:bg-bg font-main rounded text-white mx-1 py-3 px-2"
                >
                  Send Code
                </button>
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={() => setShowReset(true)}
              className="font-main bg-card md:bg-bg text-white text-[1rem] mt-8 rounded shadow inline-block w-full py-2"
            >
              Next
            </button>
          </form>
        </div>
      )}
      {showReset && (
        <div className="mt-8 w-full font-main md:w-[80%] p-4 mx-auto">
          <form>
            {/* form header */}
            <div>
              <h3 className="text-white md:text-bg text-4xl font-bold">
                Reset Password
              </h3>
            </div>
            {/* password fieldset */}
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="password"
                className="md:text-sm text-white md:text-bg"
              >
                Enter New Password
              </label>
              <div className="flex items-center mt-3 bg-neutral-300 rounded">
                <input
                  type={isText ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded my-3 font-main flex-1 text-base px-2 py-1 bg-neutral-300 outline-none"
                />
                <div className="pr-4">
                  {/* change type based on state changes */}
                  {isText ? (
                    <BsEye onClick={toggleIsText} />
                  ) : (
                    <BsEyeSlash onClick={toggleIsText} />
                  )}
                </div>
              </div>
            </div>
            {/* back to forgotten password */}
            <div className="my-3">
              <button
                onClick={() => setShowReset(false)}
                className="text-sm text-white md:text-bg cursor-pointer"
              >
                Back to forgotten password
              </button>
            </div>
            {/* submit button */}
            <button
              onClick={updatePassword}
              className="font-main bg-card md:bg-bg text-white text-[1rem] mt-8 rounded shadow inline-block w-full py-2"
            >
              Change Password
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgottenPasswordForm;
