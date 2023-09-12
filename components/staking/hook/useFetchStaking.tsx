import { UserContext } from "../../../context/UserContext";
import { useState, useMemo, useContext } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { store } from "../../../firebase/index";

export const useFetchStakes = () => {
  const [stakes, setStakes] = useState<[{}] | null | undefined | any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // user context
  const { user }: any = useContext(UserContext);

  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchStakes = async () => {
      // create collectionRef
      const collectionRef = collection(
        store,
        "/users",
        `/${user.email}`,
        "/staking"
      );
      const q = query(collectionRef, orderBy("date", "asc"));

      const stakesArray: any = [];

      onSnapshot(
        q,
        (docs) => {
          docs.forEach((doc) => {
            const data = doc.data();
            stakesArray.push({
              duration: data.duration,
              plan: data.plan,
              amount: data.amount,
              date: new Date(data.date.toDate()).toDateString(),
              apr: data.apr,
            });
            setStakes(stakesArray);
          });
        },
        (error: any) => setError(error.code)
      );
    };
    fetchStakes();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => controller.abort();
  }, [user.email]);

  return {
    error,
    loading,
    stakes,
  };
};
