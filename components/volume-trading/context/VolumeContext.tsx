import { createContext, useState, useEffect } from "react";
import commodity from "../../../lib/commodity";

export const VolumeContext = createContext<any | null>(null);

function VolumeProvider({ children }: any) {
  // chart States
  const [id, setId] = useState<number>(0);
  const [selectedCoin, setSelectedCoin] = useState<{}>();
  // set the coin
  useEffect(() => {
    const activeCoin = commodity.find((com) => com.id == id);

    setSelectedCoin(activeCoin);
  }, [id]);

  return (
    <VolumeContext.Provider
      value={{ selectedCoin, setSelectedCoin, commodity, setId, id }}
    >
      {children}
    </VolumeContext.Provider>
  );
}

export default VolumeProvider;
