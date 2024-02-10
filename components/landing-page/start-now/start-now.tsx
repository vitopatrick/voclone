import Link from "next/link";

const StartRow = () => {
  return (
    <section className="bg-card py-8 flex items-center justify-center flex-col">
      <div className="font-bold font-semibold text-3xl text-white md:text-4xl my-4 capitalize text-center">
        Start Your Crypto Journey Now!
      </div>
      <div className="font-regular text-md text-neutral-400 my-4 capitalize text-center px-3">
        With the Volume Options website, trading has never been easier.
      </div>
      <Link
        href="/auth/sign-up"
        className="bg-teal-500 px-6 py-3 rounded font-regular text-card font-bold"
      >
        Sign Up Now
      </Link>
    </section>
  );
};

export default StartRow;
