import AuthNav from "../../../components/auth-nav/auth-navbar";
import SignUpForm from "../../../components/sign-up-form/sign-up-form";
import StepTwo from "../../../components/sign-up-form/origin-form";
import { useState } from "react";
import FormProvider from "../../../components/sign-up-form/context/FormContext";

const SignUp = () => {
  const [stepTwo, setStepTwo] = useState(false);

  return (
    <FormProvider>
      {/* page Wrapper class */}
      <div className="w-screen h-screen">
        {/* parent div container */}
        <div className="flex justify-between h-screen relative">
          {/* CTA Markups */}
          <div className="flex-1 p-6 text-white bg-bg hidden md:flex flex-col justify-center items-start font-semibold font-main">
            <h1 className="text-2xl text-text_min">Still having doubts?</h1>
            <h4 className="text-6xl my-3 underline text-text_main">
              Get Started for Free
            </h4>
          </div>
          {/* Sign Up forms */}
          <div className="flex-1 bg-bg md:bg-white">
            <AuthNav
              cta="Already Have An Account ?"
              path="sign-in"
              urlName={"Sign in today"}
            />
            {stepTwo && <StepTwo move={setStepTwo} />}
            {!stepTwo && <SignUpForm move={setStepTwo} />}
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default SignUp;
