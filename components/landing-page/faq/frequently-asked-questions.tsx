import AccordionItems from "./accordion-items";
import { faqs } from "./constants/faqs";

const Faq = () => {
  return (
    <section className="my-12">
      <div className="w-[90%] mx-auto">
        <div className="font-bold text-xl md:text-4xl text-white capitalize text-center mb-6">
          Frequently Asked Questions
        </div>
        {faqs.map((faq) => (
          <AccordionItems
            question={faq.question}
            answer={faq.answer}
            index={faq.id}
            key={faq.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
