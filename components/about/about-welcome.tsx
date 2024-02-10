const showOffs = [
  {
    id: 1,
    sup: "1 Million",
    sub: "News Feed",
  },
  {
    id: 2,
    sup: "18+ Million",
    sub: "Global Investors",
  },
  {
    id: 3,
    sup: "700+",
    sub: "Coins",
  },
];

const AboutWelcome = () => {
  return (
    <section className="bg-bg text-white font-main">
      <div className="w-[90%] mx-auto">
        <div className="py-12">
          <div className="text-3xl md:text-5xl py-3 font-bold ">
            Welcome to Volume Options
          </div>
          <div className="text-neutral-300 capitalize">
            At Volume Options, we believe that everyone should have the freedom
            to earn, hold, spend, share and give their money - no matter who you
            are or where you come from.
          </div>
          <div className="flex gap-3 items-center justify-between mt-4 flex-col md:flex-row">
            {showOffs.map((showOff) => (
              <div className="bg-slate-800 w-full p-4 rounded shadow">
                <div className="mb-3 text-lg">{showOff.sup}</div>
                <div className="text-xl font-bold">{showOff.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-3 my-8">
          <div>
            <img src="/grow.png" alt="info" />
          </div>
          <div className="content-center">
            <div className="text-xl md:text-3xl py-3 font-bold ">
              Grow with Volume Options
            </div>
            <div className="text-neutral-300 capitalize">
              At Volume Options, we give people the freedom to own their
              decisions, collaborate openly, and serve our users with passion
              and integrity. Join the Volume Options team today and work with
              some of the world’s most talented, hardworking, and passionate
              people.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWelcome;
