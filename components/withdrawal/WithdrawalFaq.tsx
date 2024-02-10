import React, { useState } from "react";
import * as Md from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How long do I have to wait to withdraw from Volume Options?",
    answer:
      "Volume Options withdrawals typically take around 30 minutes.That's because it usually takes that long for Volume Options to process each transaction. However, if you withdraw large amounts, processing time may take longer.",
  },
  {
    id: 2,
    question: "Does Volume Options let you withdraw to bank?",
    answer:
      "How To Withdraw From Volume Options To Bank? Unfortunately,you cannot withdraw fiat directly from Volume Options. You will be able to withdraw your money,though,if you open an account on a different exchange that permits fiat withdrawals.",
  },
  {
    id: 3,
    question: "Can I withdraw from Volume Options without verification?",
    answer:
      "Volume Options is a cryptocurrency exchange that requires users to complete a verification process in order to use certain features of the platform, such as making deposits and withdrawals.",
  },
];

const WithdrawalFaq = () => {
  const [active, setActive] = useState(0);

  const showAnswer = (id: number) => {
    if (active === id) {
      return setActive(0);
    }
    setActive(id);
  };

  return (
    <AnimatePresence>
      <section className="flex-1 w-full">
        <div className="py-3 px-2">
          <h3 className="font-medium text-base md:text-xl  underline">Faq</h3>
          <div className="space-y-6 mt-4">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div
                  onClick={() => showAnswer(index)}
                  className="py-3 px-2 rounded shadow-xl bg-white flex items-center justify-between"
                >
                  <h4 className="font-medium text-sm cursor-pointer">
                    {faq.question}
                  </h4>
                  <div>
                    {active === index ? (
                      <Md.MdArrowDropUp />
                    ) : (
                      <Md.MdArrowDropDown />
                    )}
                  </div>
                </div>
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className={
                    active === index
                      ? "py-3 px-2 bg-white/40 leading-loose text-neutral-800 text-xs"
                      : "hidden"
                  }
                >
                  {faq.answer}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default WithdrawalFaq;
