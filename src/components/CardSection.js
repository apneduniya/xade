
import "../styles/better.css";

import React, { useState, useEffect, useRef } from 'react'
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

		<div className="lol" style={{ backgroundColor: '#0F0F10' }}>
			<div className={`image-container1`} ref={imageRef}>
				<img className={`imagecard`} src={process.env.PUBLIC_URL + '/Media/Group1.svg'} alt="Image" />
			</div>
			<div className="header3" style={{ marginTop: "5%", fontFamily: 'Benzin-Medium', color: '#ddd', textAlign: 'center' }}></div>
			<div className="header" style={{ fontFamily: 'NeueMontreal-Bold', color: '#fff' }}>
				Get yourself the Xade card
			</div>
			<br />
			<div className="topText" style={{ fontFamily: 'Regular', color: '#B3C5BB' }}>
				Get your own non-custodial card powered by Visa to spend globally and to win exclusive rewards </div>
			<br></br>
			<div className="CardbuttonContainer">
				<button onClick={(e)=>{e.preventDefault();window.open("https://forms.gle/DsptyteisKfaqbRX8", '_blank')}}>Apply for card</button>
			</div>
			<br />

			<div className="header3" id="he3" style={{  marginTop: "2%", fontFamily: 'Benzin-Medium', color: '#ddd', paddingTop: '5%' }}>PARTNERS & BACKERS </div>
			<div className="header" id="cardh" style={{ fontFamily: 'Benzin-Bold', color: '#fff' }}>
				We are working with the best
			</div>
			<div className="topText" id="cardtt" style={{ fontFamily: 'Regular', color: '#B3C5BB' }}>
				We are working with the best projects in the space across community,infrastructure and more while we are backed by some reputable companies in the space</div>
			<br></br>
			<div class="slider1"><div class="slide-track"><div class="slide">
				<img src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-6_px1l3a.png" height="100" width="250" alt=""/>
				</div>
				<div class="slide">
					<img src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-7_ukycnc.png" height="100" width="250" alt=""/>
			</div>
			<div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-11_kvwtp6.png" height="100" width="250" alt=""/>
				</div>
				<div class="slide">
					<img src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-17_rc6m3r.png" height="100" width="250" alt=""/>
					</div>
					<div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-10_ucyjce.png" height="100" width="250" alt=""/>
					</div>
					<div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-16_utgxlo.png" height="100" width="250" alt=""/>
					</div>
					<div class="slide">
						<img src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-6_px1l3a.png" height="100" width="250" alt=""/>
						</div>
						<div class="slide">
							<img src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-7_ukycnc.png" height="100" width="250" alt=""/>
							</div>
							<div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-11_kvwtp6.png" height="100" width="250" alt=""/></div><div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-17_rc6m3r.png" height="100" width="250" alt=""/></div><div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-10_ucyjce.png" height="100" width="250" alt=""/></div><div class="slide"><img src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-16_utgxlo.png" height="100" width="250" alt=""/>
							</div></div></div>

			<div class="slider2" style={{paddingBottom: "3%", background: "rgb(18, 19, 20)"}}>
  <div class="slide-track">
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684876827/Untitled_design-15_istprd.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684874140/Untitled_design-8_gy9tfa.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-12_egkocd.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-9_mk3u1v.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-14_n1b6iz.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-13_qtoz2g.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684876827/Untitled_design-15_istprd.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684874140/Untitled_design-8_gy9tfa.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-12_egkocd.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-9_mk3u1v.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-14_n1b6iz.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-13_qtoz2g.png" height="100" width="250" alt="" />
    </div>
  </div>
</div>


		</div>

	);
};

export default App;