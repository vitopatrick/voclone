import { ctas } from "./endless-writes";
import { motion } from "framer-motion";

const Endless = () => {
  return (
    <section className="md:p-10">
      <div className="w-[90%] mx-auto">
        <div className="font-bold text-xl text-white md:text-4xl mb-6">
          Explore Endless Opportunities with Volume Options
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {ctas.map((cta: any, index) => (
            <motion.div
              variants={{
                start: { opacity: 0 },
                end: { opacity: 1 },
              }}
              initial="start"
              whileInView="end"
              transition={{
                duration: 1,
                delay: index * 0.3,
              }}
              key={cta.pri}
              className="w-full p-6 bg-card rounded-lg shadow border border-teal-500"
            >
              <h5 className="mb-2 text-xl font-bold text-teal-500 font-main">
                {cta.pri}
              </h5>
              <p className="font-regular text-white">{cta.sec}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endless;
