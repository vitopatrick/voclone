import React from "react";

const RiskBody = ({ heading, body }: any) => {
  return (
    <section className="font-main text-white my-3">
      <div className="w-[90%] mx-auto">
        <h4 className="my-2 font-bold text-xl md:text-2xl text-teal-400">
          {heading}
        </h4>
        <p className="leading-loose">{body}</p>
      </div>
    </section>
  );
};

export default RiskBody;
