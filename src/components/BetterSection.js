
import "../styles/better.css";



const App = () => {

  return (
    <div className="lol">
      <div className="header" style={{marginTop:'5%'}}>
      The Hybrid Solution
      </div>
      <br />
      <div className="topText">
      Our hybrid solution provides the best of Trad-Fi and DeFi to solve the inefficiencies and opacity of Trad-Fi and the user experience and practicality in DeFi.

      </div>
      <br></br>
      <div className="boxgfather">
        <div className="boxfather">
      <div className="betterbox betterbox1">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b1.png'} alt="Image" />

        </div>
        <div className="headerText">Made for the real world use-cases</div>
        <hr className="line1" />
        <div className="circle"></div>
        <div className="mainText">We have created our product to be a direct competitor to traditional banks and aim to bring real world elements such as inflation in countries and tangible assets on chain.</div>
      </div>

      <div className="betterbox betterbox2">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b2.png'} alt="Image" />
        </div>
        <div className="headerText">Simple and familiar user experience</div>
        <hr className="line1" />        <div className="spheres"></div>
        <div className="mainText">Our app provides simple, easy-to-understand user experience which is indistinguishable from digital banking experience through our premium and modern interface.</div>
      </div>
      </div>
      <div className="boxfather">
      <div className="betterbox betterbox3">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b3.png'} alt="Image" />
        </div>
        <div className="headerText">Innovative and sustainable</div>
        <hr className="line1" />        <div className="shield"></div>
        <div className="mainText">We are powered by our own in-house DeFi Protocols which are designed to replicate real world banking services in the most efficient and sustainable way possible</div>
      </div>

      <div className="betterbox betterbox4">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b4.png'} alt="Image" />
        </div>
        <div className="headerText">Transparent and non-custodial</div>
        <hr className="line1" />        <div className="thumb"></div>
        <div className="mainText">We never take custody over your funds while being completely transparent and decentralized by keeping all our transactions, documents and codebase publicly accessible</div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default App;