import { UserContext } from "./../context/UserContext";
import { useState, useMemo, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { store } from "../firebase";

export const useTransaction = (id: String | any, path: string | any) => {
  const [transaction, setTransaction] = useState<{} | null | any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // user context
  const { user }: any = useContext(UserContext);

  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchTransactions = async () => {
      // create docRef
      const docRef = doc(store, "/users", `${user.email}`, `/${path}`, `${id}`);
      onSnapshot(
        docRef,
        (doc: any) => {
          const data = {
            amount: doc.data().amount,
            coin: doc.data().coin,
            approved: doc.data().approved,
            date: new Date(doc.data().date.toDate()).toDateString(),
            network: doc.data().network,
            hash: doc.data().hash,
            address: doc.data().address,
            fee: doc.data().fee,
          };

          setTransaction(data);
        },
        (error: any) => setError(error.code)
      );
    };

    fetchTransactions();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => controller.abort();
  }, [user.email, id]);

  return {
    error,
    loading,
    transaction,
  };
};
