import React from "react";
import "../styles/style.css";
// import video from "../assets/Video.mp4";



export default function TopSection() {
  return (
    <>
      <div className="video-container">
        {/* <video autoPlay={true} muted={true} loop={true}> */}
          {/* <source src={video} type="video/mp4" /> */}
        {/* </video> */}
        <div className="leftsection"style = {{marginTop:"5%"}}>
        <div className="header3" style = {{fontFamily: 'Benzin-Medium'}}>PUBLIC MAINNET IS LIVE </div>
          <div className="header1" style = {{fontFamily: 'Benzin-Bold'}}>INTRODUCING A NEW ERA OF FINANCE</div>
          <br />
          <div className="subhead2" style = {{ color:"#B3C5BB"}}>
          Meet the world’s first financial app powered by DeFi protocols that provides banking services on-chain.
          </div>
          <br />
          {/* <br />
          <br /> */}
          <br />
          <div className="button89"style = {{paddingBottom: 25,paddingLeft : 0, marginRight: '2.7rem',color:'#5AF698'}}>
            <a
              href="https://bit.ly/xadefinance"
              style={{ textDecoration: "none", color:'#5AF698'}}
            >
              <img src = {process.env.PUBLIC_URL + '/Media/i1.png'} style = {{marginRight: '0.7rem', height:'1.2rem', marginBottom: '4px'}}/>
              Get Started
            </a>
          </div>
          <div className="button89" id="ras" style = {{paddingLeft : 0,paddingBottom:25}} >
            <a
              href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
              style={{ textDecoration: "none", color:'#E3E3E3' ,      opacity: 0.699999988079071}}
            >
                <img src = {process.env.PUBLIC_URL + '/Media/File_dock_fill.png'} style = {{marginRight: '0.7rem', height:'1.2rem', marginBottom: '4px'}}/>
              Read About Us
            </a>
          </div>
        </div>
      <div style = {{color: 'white'}} id="rightsection" className="rightsection">
        <img src = {process.env.PUBLIC_URL + '/Media/Group 29.png'} draggable="false" alt="xade"/>
      </div>
      </div>
      <br/>
    </>
  );
}
