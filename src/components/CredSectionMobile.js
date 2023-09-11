import './styles.css'
import React, { useRef, useEffect, useLayoutEffect, forwardRef, useState } from "react";
import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LeftSection = ({  }) => {
//     const leftSectionRef = useRef(null);
  
//     const handleScroll = () => {
//         console.log('life')
//         var element = document.getElementById('left-section');
// var position = element.getBoundingClientRect();
// var x = position.left;
// var top = position.top;
//       // const top = document.getElementsByClassName('left-section')[0].pageYOffset
//       console.log(top)
//       const bottom = top + document.getElementsByClassName('left-section')[0].style.height;
//       console.log(bottom)
//       const lines = leftSectionRef.current.querySelectorAll(".line");
//       let activeIndex = -1;
//       for (let i = 0; i < lines.length; i++) {
//         const line = lines[i];
//         const rect = line.getBoundingClientRect();
//         if (rect.top <= bottom && rect.bottom >= top) {
//           console.log('wot')
//           activeIndex = i + 1;
//         }
//       }
//       console.log(activeIndex)
//       setActiveLine(activeIndex);
//     };
    
//     useEffect(() => {
//       console.log(1);
//       handleScroll(); // Set initial active line
//       document.getElementsByClassName('left-section')[0].addEventListener("scroll", handleScroll, true);
//       return () => {
//         document.getElementsByClassName('left-section')[0].removeEventListener("scroll", handleScroll);
//       };
//     }, [setActiveLine]);
const getImage = (lineIndex) => {
    switch (lineIndex) {
      case 1:
        return "https://res.cloudinary.com/xade-finance/image/upload/v1684697594/Mask_group-14_dltqm4.png";
      case 2:
        return "https://res.cloudinary.com/xade-finance/image/upload/v1684697496/payments-4_tmxt1z.png";
      case 3:
        return "https://res.cloudinary.com/xade-finance/image/upload/v1684697594/Mask_group-13_rnxtfy.png";
      case 4:
        return "https://res.cloudinary.com/xade-finance/image/upload/v1684697495/payments-3_ccnbii.png";
      default:
        return "";
    }
  };
    return (
      <div className="left-section2" id="left-section" style = {{width: '100%'}}>
        <div className="line2">
        <div style = {{fontFamily: 'Benzin-Medium' ,fontSize:'0.6rem',letterSpacing:'10px',color:'#E86D6F'}}>GLOBAL PAYMENTS </div>
          <div style = {{fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold'}}>
            GLOBAL GASLESS PAYMENTS TO ANY IDENTITY
          </div>
          <br /><br /><br />
          <div className="image-wrapper">

            <img src={getImage(1)} alt="Image 4" />

          </div>
          <br></br><br />
          <div style = {{fontSize: '1rem',fontFamily:'Regular'}}>
          Send Payments to any email address, mobile number, DID and more in a gasless manner irrespective of the fact whether the recipient has a wallet or not with programmable payments.
          </div>
          </div>
          <br /> <br />
        <div className="line2">
        <div style = {{fontFamily: 'Benzin-Medium' ,fontSize:'0.6rem',letterSpacing:'10px',color:'#A15EFF'}}>HIGH YIELD SAVINGS </div>
        <div style = {{fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold'}}>
        BEAT INFLATION WITH A STABLE SAVINGS ACCOUNT

          </div>
          <br></br><br />
          <div className="image-wrapper">
          <div className="image-container" style={{borderRadius: '1rem'}}>
            <img src={getImage(2)} alt="Image 4" />
          </div>
          </div>
          <br /><br /><br />
          <div style = {{fontSize: '1rem',fontFamily:'Regular'}}>
          Get a savings account created specifically to beat inflation by financing real world loans powered by our innovative savings protocol SabeX.
</div>
        </div>
        <div className="image-wrapper">

<img src={getImage(2)} alt="Image 4" />

<br /> <br />

</div>
        <br /> <br />
        <div className="line2">
        <div style = {{fontFamily: 'Benzin-Medium' ,fontSize:'0.6rem',letterSpacing:'10px',color:'#FFCE40'}}>PRO TRADING </div>
        <div style = {{fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold'}}>
          TRADE ANYTHING WITH 10X LEVERAGE
                    </div>
          <div style = {{fontSize: '1rem',fontFamily:'Regular'}}>
          Go Long or Short with upto 10x leverage on stocks, crypto, forex and more powered by DeriveX with almost guranteed liquidity and improved risk engines.
          </div>
        </div>
        <div className="image-wrapper">

<img src={getImage(3)} alt="Image 4" />

<br /> <br />

</div>
        <br /><br />
        <div className="line2">
        <div style = {{fontFamily: 'Benzin-Medium' ,fontSize:'0.6rem',letterSpacing:'10px',color:'#40CEFF'}}>INSTANT LOANS </div>
        <div style = {{fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold'}}>
      FINANCE YOUR LOANS EASILY
          </div>
          <div style = {{fontSize: '1rem',fontFamily:'Regular'}}>
          Finance your real world loans such as EMIs or Mortgages or against ERC-20 Tokens in various manners with no paperwork powered by SabeX.
          </div>
          <br></br>
          </div>
          <div className="image-wrapper">

            <img src={getImage(4)} alt="Image 4" />

          <br /> <br />

        </div>
        <br /><br />
        {/* <div className="image-wrapper" >
          <div className="image-container">
            <img src={getImage(1)} alt="Image 1" />
          </div>
          <div className="image-container">
            <img src={getImage(2)} alt="Image 2" />
          </div>
          <div className="image-container">
            <img src={getImage(3)} alt="Image 3" />
          </div>
          <div className="image-container">
            <img src={getImage(4)} alt="Image 4" />
          </div>
        </div> */}
      </div>
    );
  };
  




  
  

const App = () => {
  const [activeLine, setActiveLine] = useState(1);

  return (
    <div className="app2">
        <LeftSection />
    </div>
  );
};

export default App;
