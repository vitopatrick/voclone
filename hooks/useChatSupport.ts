import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/ync8hvqxmtqrbl0yehy2y2oyx79imjal.js";

    document.body.appendChild(script);
  }, []);
};
