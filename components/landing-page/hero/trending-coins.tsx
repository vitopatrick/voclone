import { useFetchAllCoins } from "../../../hooks/useFetchAllCoins";

const TrendingCoins = () => {
  const { coins: firstCoins, loading } = useFetchAllCoins(4);

  const coins = firstCoins.slice(0, 4);

  return (
    <div className="w-[80%] mx-auto hidden md:block">
      <div className="py-3 px-5 w-full bg-card rounded">
        <div className="flex justify-evenly items-center">
          {coins.map((coin: any) => (
            <div>
              <div className="w-[15%] my-3">
                <img src={coin.img} alt={coin.name} />
              </div>
              <div className="flex items-center gap-2 mt-2 mb-1">
                <h3 className="font-medium text-xl">{coin.name} </h3>
                <h4 className="text-sm font-medium">({coin.sym})</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
