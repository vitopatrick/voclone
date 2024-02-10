import Link from "next/link";
import { motion } from "framer-motion";

const StartToday = () => {
  return (
    <motion.section
      variants={{
        initial: {
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
      initial="initial"
      whileInView="visible"
      className="my-16"
    >
      <div className="w-[90%] mx-auto">
        <div className="md:grid grid-cols-2">
          <div>
            <img src="/number-one.svg" alt="wallet" />
          </div>
          <div className="my-2 md:my-0">
            <h4 className="text-xl md:text-4xl font-main font-bold capitalize mb-2 text-teal-500">
              Create your cryptocurrency portfolio with the best
            </h4>
            <p className="capitalize font-regular leading-relaxed my-8 text-neutral-300">
              seize and maximize the opportunities and potentials of crypto
              today by joining Volume Options
            </p>
            <Link
              href="/auth/sign-up"
              className="rounded px-6 py-3 bg-teal-500 text-card font-regular"
            >
              Get Start Now
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StartToday;
