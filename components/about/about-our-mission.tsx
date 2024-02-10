import React from "react";

const AboutOurMission = () => {
  return (
    <section className="bg-bg text-white font-main">
      <div className="w-[90%] mx-auto">
        <div className="text-3xl md:text-5xl py-3 font-bold ">Our Mission</div>
        <div className="text-neutral-300 capitalize">
          Today, Volume Options is the world’s leading blockchain ecosystem,
          with a product suite that includes the largest digital asset exchange.
          Our Mission is to be the infrastructure service provider in crypto.
        </div>
        {/* info graphs */}
        <div>
          {/* 1 */}
          <div className="md:grid grid-cols-2 gap-3 my-3">
            <div>
              <img src="/users.png" alt="info" />
            </div>
            <div>
              <div className="text-xl md:text-3xl py-3 font-bold ">
                Putting our users first
              </div>
              <div className="text-neutral-300 capitalize">
                Users are at the heart of everything we do. From the beginning,
                we made user protection our top priority. That’s why we’ve
                embedded state-of-the-art security measures and strict data
                privacy controls across the entire Volume Options ecosystem.
              </div>
            </div>
          </div>
          {/*  end 1 */}
          {/* start 2 */}
          <div className="md:grid grid-cols-2 gap-3 my-6">
            <div>
              <div className="text-xl md:text-3xl py-3 font-bold ">
                Working with regulators
              </div>
              <div className="text-neutral-300 capitalize">
                We’re also committed to meeting the highest standards for
                regulatory compliance to maintain our responsibility to our
                users and further build a sustainable path forward for the
                blockchain industry.
              </div>
            </div>
            <div>
              <img src="/sec.png" alt="info" />
            </div>
          </div>
          {/* end 2 */}
        </div>
        {/* end of info graphs */}
      </div>
    </section>
  );
};

export default AboutOurMission;
