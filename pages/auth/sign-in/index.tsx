import AuthNav from "../../../components/auth-nav/auth-navbar";
import LoginForm from "../../../components/login-form/login-form";

const SignIn = () => {
  return (
    <>
      <div className="w-screen h-screen">
        {/* parent div */}
        <div className="flex justify-between h-screen relative">
          {/* CTA write Ups */}
          <div className="flex-1 p-6 flex-col font-semibold text-white bg-bg hidden md:flex justify-center items-start font-main">
            <h1 className="text-2xl text-text_min">
              Don't Get lost looking for the next crypto Gem
            </h1>
            <h1 className="text-6xl my-3 underline text-text_main">
              log in now
            </h1>
          </div>
          {/* Form Elements */}
          <div className="flex-1 bg-bg md:bg-white">
            <AuthNav
              cta="Don't have an account"
              path="sign-up"
              urlName={"sign up now"}
            />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
