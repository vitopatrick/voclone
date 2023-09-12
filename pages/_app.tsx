import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserProvider from "../context/UserContext";
import { useChatSupport } from "../hooks/useChatSupport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  useChatSupport();
  return (
    <UserProvider>
      <Component {...pageProps} />

      <ToastContainer theme="colored" draggable closeOnClick />
    </UserProvider>
  );
}
