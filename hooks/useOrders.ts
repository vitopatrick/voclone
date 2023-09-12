import { UserContext } from "./../context/UserContext";
import { useState, useMemo, useContext } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { store } from "../firebase";
import { addDay, relativeTime } from "../utils/formatTime";

export const useOrders = () => {
  const [orders, setOrders] = useState<[{}] | null | undefined | any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // user context
  const { user }: any = useContext(UserContext);

  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchTransactions = async () => {
      // create collectionRef
      const collectionRef = collection(
        store,
        "/users",
        `/${user.email}`,
        "/orders"
      );
      const q = query(collectionRef, orderBy("date", "desc"));

      const ordersArray: any = [];

      onSnapshot(
        q,
        (docs) => {
          docs.forEach((doc) => {
            doc.data();

            const data = doc.data();
            const date = new Date(data.date.toDate());
            const endDate =
              data.duration == "24 hours"
                ? 1
                : data.duration == "4 days"
                ? 4
                : data.duration == "7 days"
                ? 7
                : 0;
            const newDate = date.setUTCDate(date.getUTCDate() + endDate);

            ordersArray.push({
              coin: data.coin,
              amount: data.amount,
              end: new Date(newDate).toDateString(),
              profit: data.profit,
              level: data.level,
              date: new Date(data.date.toDate()).toDateString(),
              status: data.status,
            });
            setOrders(ordersArray);
          });
        },
        (error: any) => {
          setError(error.message);
        }
      );
    };

    fetchTransactions();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => controller.abort();
  }, [user.email]);

  return {
    error,
    loading,
    orders,
  };
};
