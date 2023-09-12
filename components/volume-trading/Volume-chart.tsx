import React, { useEffect, useRef, useState, useContext } from "react";
import { VolumeContext } from "./context/VolumeContext";

const VolumeChart = () => {
  const {
    commodity: commodities,
    setId,
    selectedCoin,
  } = useContext(VolumeContext);

  return (
    <div className="mb-8 p-3 md:col-span-3">
      <div>
        <h4 className="font-medium underline  text-base">
          Select Coin to Trade
        </h4>
        <div className=" flex flex-nowrap items-center gap-4 my-4 overflow-x-scroll">
          {commodities.map((com: any, index: number) => (
            <div
              key={com.id}
              onClick={() => setId(index)}
              className={
                com.name == selectedCoin?.name
                  ? "flex items-center gap-5 rounded cursor-pointer bg-white shadow-md border-teal-400 border-[1px] px-6 py-3 "
                  : "flex items-center gap-5 rounded cursor-pointer bg-white shadow-md px-6 py-3 "
              }
            >
              <div className="w-[30px] h-[30px]">
                <img src={com.logo} alt="" className="rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold">{com.displayName}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TradingViewWidget commodity={selectedCoin} />
    </div>
  );
};

export default VolumeChart;

// TradingViewWidget.tsx
let tvScriptLoadingPromise: unknown | any;

declare global {
  interface Window {
    TradingView: any;
  }
}

function TradingViewWidget({ commodity }: any) {
  const onLoadScriptRef = useRef<unknown | any>();

  useEffect((): any => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_5fb3f") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: commodity.name,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          backgroundColor: "#fff",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_5fb3f",
        });
      }
    }
  }, [commodity]);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_5fb3f" className="h-[800px]" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
