import React from "react";
import "../styles/style.css";

export default function Footer() {
  return (
    <>

      <footer className="py-6" >
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mr-auto">
              <div id="footerxade"style = {{textAlign:'left',fontFamily:'Lemon Milk',fontSize:'2.3rem'}}>
                XADE
              </div>
              <br></br>
              <p className="footerx"style = {{textAlign:'center'}}> 
              <p className="footerx"style = {{textAlign:'left',fontFamily:'Regular',color:'#808080'}}>Xade is compeletely non-custodial and never takes control over the user's funds while all the codebases and transactions are publicly available</p>
              <br></br>
              <p className="footerx"style = {{textAlign:'left',fontFamily:'Regular',lineHeight:'0.4rem'}}> <p style={{textAlign:'left',fontFamily:'SemiBold',fontSize:'1.2 rem'}}>CONTACT US</p>support@xade.finance</p>
              <p className="footerx"style = {{textAlign:'left',fontFamily:'Regular',lineHeight:'0.4rem',color:'#808080'}}>Unit No. 810, Gold Crest Executive,</p>
              <p className="footerx"style = {{textAlign:'left',fontFamily:'Regular',lineHeight:'0.4rem',color:'#808080',marginBottom:'10%'}}>C2A Jumeriah Lake Towers, Dubai,UAE</p>

              </p>
              
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="col-sm-2">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                                <li>
                  <a
                    href="https://docs.xade.finance"
                    target="_blank"
                    rel="noreferrer"
                  >
                 Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/xadefinance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@XadeFinance"
                    target="_blank"
                    rel="noreferrer"
                  >
   Medium
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCK1Bgb4A2OvXDHuCHKI7c-g"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.xade.finance/privacy-policy/                    "
                    target="_blank"
                    rel="noreferrer"
                  >
Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://instagram.com/xade.finance?"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/xadefinance/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/xadefi"
                    target="_blank"
                    rel="noreferrer"
                  >
                Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/xade-finance/"
                    target="_blank"
                    rel="noreferrer"
                  >
                LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/VxuKdRRzmN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Blog</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://xadefinance.medium.com/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
                    target="_blank"
                    rel="noreferrer"
                  >
         What is Xade
                  </a>
                </li>
                <li>
                  <a
                    href="https://xadefinance.medium.com/remmitex-payments-reimagined-8b4b10996c1c"
                    target="_blank"
                    rel="noreferrer"
                  >
                RemmiteX
                  </a>
                </li>
                <li>
                  <a href="https://xadefinance.medium.com/sabex-lets-beat-inflation-8d8fe9a5e2a1" target="_blank" rel="noreferrer">
             SabeX
                  </a>
                </li>
                <li>
                  <a
                    href="https://xadefinance.medium.com/derivex-trading-unleashed-23650b84a0a"
                    target="_blank"
                    rel="noreferrer"
                  >
                 DeriveX
                  </a>
                </li>
                <li>
                  <a
                    href="https://xadefinance.medium.com/introducing-xade-star-and-xade-affiliate-program-707cadc27f4"
                    target="_blank"
                    rel="noreferrer"
                  >
             Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-muted text-center small-xl">
              © {new Date().getFullYear()} Neon Worldwide DMCC - All Rights
              Reserved
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-top">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </div>
    </>
  );
}
