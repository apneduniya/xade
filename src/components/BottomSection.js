import React from "react";
import "../styles/style.css";

export default function BottomSection() {
  return (
    <>
      <div>
        <div className="bettermain">The Hybrid Solution</div>
        <br />
        <br />
        <div className="bettersub">
          <div className="text-centre">
          Our hybrid solution provides the best of Trad-Fi and DeFi to solve the inefficiencies and opacity of Trad-Fi and the user experience and practicality in DeFi.
          </div>
        </div>
        <div>
          <br />
          <br />
          <div className="more-features-center">
            <div className="more-features-top-elements">
              <div className="more-features-element">
                {/* <img
                  src="https://www.xade.finance/Media/uxicon.svg"
                  className="dabbang"
                /> */}
                <div className="betterhead v1">
                  <p>12k+</p>
                </div>
                <p style={{ color: "#7b7b7b" }} className="bettercontent">
                  Community members
                </p>
              </div>
              <div className="more-features-element">
                {/* <img
                  src="https://www.xade.finance/Media/innovative.svg"
                  className="dabbang"
                /> */}
                <div className="betterhead v2">
                  <p>$1mil+</p>
                </div>
                <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                  Transaction volume
                </p>
              </div>
              <div className="more-features-element">
                {/* <img
                  src="https://www.xade.finance/Media/world icon.svg"
                  className="dabbang"
                /> */}
                <div className="betterhead v3">
                  <p>10k+</p>
                </div>
                <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                  Daily active users
                </p>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </>
  );
}
