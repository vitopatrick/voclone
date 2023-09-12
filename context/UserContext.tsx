import React, { createContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext<{} | null>({});

const UserProvider = ({ children }: ReactNode | any) => {
  const [user, setUser] = useState({});
  const [coin, setCoin] = useState("bitcoin");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, coin, setCoin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
