
import "../styles/better.css";

import React, {useState, useEffect, useRef} from 'react'
const App = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const imageRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsExpanded(true);
              observer.unobserve(imageRef.current);
            }
          },
          { threshold: 0.5 } // Trigger the observer when the image is 50% in view
        );
        observer.observe(imageRef.current);
      }, []);
  return (
    <div className="lol" style = {{backgroundColor: 'rgb(16,16,17)'}}>
         <div  className={`image-container1`}ref={imageRef}>
      <img className={`image ${isExpanded ? 'expanded' : ''}`} src={process.env.PUBLIC_URL + '/Media/nftimg.png'} draggable="false" alt="Image" />
    </div>
      <div className="header">
        Feel the premium experience
      </div>
      <br />
      <div className="topText" style={{fontSize: '1.4rem', marginBottom: '2rem'}}>
      Offering you our unique NFT-based subscriptions that give their owners reduced fees, Xade Tokens, exclusive collectibles, a free card and much more </div>
      <br></br>
      <div className="CardbuttonContainer">
      <button onClick={(e)=>{e.preventDefault();window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGtibGlvZ2hhaGw4c2xvN2xhODliMm5ybGcga2lyYW5hbGV4Y0Bt&tmsrc=kiranalexc%40gmail.com ", '_blank')}}>Set Reminder</button>
	  </div>
    <br/>
    </div>
  );
};

export default App;