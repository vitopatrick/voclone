import { useState, useContext } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FormContext } from "./context/FormContext";
import { toast } from "react-toastify";

const SignUpForm = ({ move }: any) => {
  const [isText, setIsText] = useState(false);

  const { email, password, name, setName, setEmail, setPassword } =
    useContext(FormContext);

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const registerUsers = (e: any) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast("Please Fill the form correctly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }
    move(true);
  };

  return (
    <>
      <div className="mt-8 w-full md:w-[80%] p-6 md:p-4 mx-auto font-main">
        <form>
          {/* form header */}
          <div>
            <h3 className="text-white md:text-bg text-4xl font-main font-semibold">
              Sign Up
            </h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-4">
            <label
              htmlFor="name"
              className="md:text-sm text-neutral-300 md:text-bg"
            >
              Full Name
            </label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded mb-3 mt-1 text-base px-2 py-3 w-full bg-neutral-300 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="email"
              className="md:text-sm text-neutral-300 md:text-bg"
            >
              Email/sub Account
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded mb-3 mt-1 text-base px-2 py-3 w-full bg-neutral-300 outline-none"
              />
            </div>
          </div>
          {/* password fieldset */}
          <div className="mt-4 flex flex-col">
            <label
              htmlFor="password"
              className="md:text-sm text-neutral-300 md:text-bg"
            >
              Password
            </label>
            <div className="flex items-center mt-3 bg-neutral-300 rounded">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded mb-3 mt-1 text-base px-2 py-1 w-full bg-neutral-300 outline-none"
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
          {/* sign up button */}
          <button
            onClick={registerUsers}
            className="font-main bg-card md:bg-bg text-text_main text-white text-[1rem] mt-8 rounded shadow shadow-bg inline-block w-full py-2"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
