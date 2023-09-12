import { UserContext } from "./../context/UserContext";
import { useState, useMemo, useContext } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { store } from "../firebase";

export const useTransactions = (path: String | any) => {
  const [transactions, setTransactions] = useState<
    [{}] | null | undefined | any
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // user context
  const { user }: any = useContext(UserContext);

  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchTransactions = async () => {
      // create collectionRef
      const collectionRef = collection(store, "/users", `${user.email}`, path);
      const q = query(collectionRef, orderBy("date", "desc"));

      const transactionsArray: any = [];

      onSnapshot(
        q,
        (docs) => {
          docs.forEach((doc) => {
            const data = doc.data();

            transactionsArray.push({
              coin: doc.data().coin,
              approved: doc.data().approved,
              amount: parseInt(data.amount),
              date: new Date(data.date.toDate()).toDateString(),
              id: doc.id,
            });
            setTransactions(transactionsArray);
          });
        },
        (error: any) => setError(error.code)
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
    transactions,
  };
};
