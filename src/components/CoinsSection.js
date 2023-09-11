
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
    <div className="lol" style = {{backgroundColor: '#0F0F10'}}>
         <div  className={`image-container1`}ref={imageRef}>
      <img  className={`imagecard`} src={process.env.PUBLIC_URL + '/Media/coinsimage.png'} alt="Image" />
    </div>
      <div className="header">
        Earn Xade Coins
      </div>
      <br />
      <div className="topText" style={{fontSize: '1.5rem', marginBottom: '2rem'}}>
      Complete quests, be active in the Xade community and earn Xade coins that you can save or spend on amazing rewards </div>
      <br/>
      <div className="CardbuttonContainer">
	  <button onClick={(e)=>{e.preventDefault();window.open("https://docsend.com/view/84zhyz9hcf7d3hgz", '_blank')}}>Learn about our tokenomics</button>
	  </div>
    <br/>
    </div>
  );
};

export default App;