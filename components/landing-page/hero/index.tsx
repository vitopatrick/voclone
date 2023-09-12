import Link from "next/link";
import TrendingCoins from "./trending-coins";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      className="text-white"
    >
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-col items-center justify-center my-16">
          <h1 className="text-4xl md:text-6xl capitalize font-bold text-center leading-normal">
            Start building your Crypto Portfolio today
          </h1>
          <p className="font-regular py-3 capitalize text-lg text-center text-neutral-300">
            discover,trade,stake and increase your crypto Portfolio with zero
            exchange chargers.
          </p>
          <Link
            href="/auth/sign-up"
            className="bg-teal-500 text-base md:text-xl px-6 py-3 rounded mt-4 text-bg font-medium"
          >
            Get Start today
          </Link>
        </div>
      </div>
      <TrendingCoins />
    </motion.section>
  );
};

export default Hero;
