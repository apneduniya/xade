
import "../styles/better.css";

import React, {useState, useEffect, useRef} from 'react'
const App = () => {
   
  return (
    <div className="lol" style = {{marginTop: '3rem'}}>
         {/* <div  className={`image-container1`}ref={imageRef}>
      {/* <img  className={`imagecard`} src={process.env.PUBLIC_URL + '/Media/card.png'} alt="Image" /> */}
    {/* </div> */}
      <div className="header">
Current stats      </div>
      <br />
      <div className="topText" style={{fontSize: '1.2rem', marginBottom: '0rem', color: 'grey'}}>
Xade community is growing fast. Look at what we've already achieved      <br></br>
    {/* <div style = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '5rem', color: 'white'}}><a href = "https://mint.xade.finance" className = "buttonstuff">Apply for Card</a>   </div>    */}
    </div>
    <div>
          
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
  );
};

export default App;