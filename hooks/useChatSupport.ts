import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/k0n1atyomzwfcfiffrkbrcfsnbupfucv.js";

    document.body.appendChild(script);
  }, []);
};
