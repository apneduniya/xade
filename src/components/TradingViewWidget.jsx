// // TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";

// let tvScriptLoadingPromise;

// export default function TradingViewWidget() {
//   const onLoadScriptRef = useRef();

//   useEffect(() => {
//     onLoadScriptRef.current = createWidget;

//     if (!tvScriptLoadingPromise) {
//       tvScriptLoadingPromise = new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.id = "tradingview-widget-loading-script";
//         script.src = "https://s3.tradingview.com/tv.js";
//         script.type = "text/javascript";
//         script.onload = resolve;

//         document.head.appendChild(script);
//       });
//     }

//     tvScriptLoadingPromise.then(
//       () => onLoadScriptRef.current && onLoadScriptRef.current()
//     );

//     return () => (onLoadScriptRef.current = null);

//     function createWidget() {
//       if (
//         document.getElementById("tradingview_159b9") &&
//         "TradingView" in window
//       ) {
//         new window.TradingView.widget({
//           autosize: true,
//           symbol: "CRYPTO:BTCUSD",
//           interval: "1",
//           timezone: "Etc/UTC",
//           theme: "dark",
//           style: "1",
//           locale: "in",
//           toolbar_bg: "#f1f3f6",
//           enable_publishing: false,
//           withdateranges: true,
//           hide_side_toolbar: false,
//           allow_symbol_change: true,
//           container_id: "tradingview_159b9",
//         });
//       }
//     }
//   }, []);

//   return (
//     <div className="tradingview-widget-container">
//       <div id="tradingview_159b9" />
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://in.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// TradingViewWidget.jsx

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
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
        document.getElementById("tradingview_87f1e") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "CRYPTO:BTCUSD",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "in",
          enable_publishing: false,
          backgroundColor: "rgba(0, 0, 0, 1)",
          gridColor: "rgba(182, 182, 182, 0.14)",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_87f1e",
          custom_css_url: './custom.css',
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_87f1e" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://in.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
