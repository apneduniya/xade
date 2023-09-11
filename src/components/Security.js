import React from 'react';
import "../styles/better.css";

const Security = () => {
    return (
        <>
            <div className="lol">
                <br />
                <br />
                <div className="header" style={{ fontSize: "3rem" }}>
                    Your security is our priority
                </div>
                <br />
                <div className="topText" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
                    We ensure you that all your assets are safe and all your transactions are encrypted so you can feel confident that what’s yours remains only yours</div>
                <br></br>
                <div className="boxfather">
                    <div className="betterbox betterbox5">

                        <div className="headerText" >Non- <span style={{marginRight: "60px"}}> custodial</span></div>
                        <br />
                        <br />
                        <div className="circle"></div>
                        <div className="mainText"><span style={{  display : 'inline-block'}}>Xade works in a completely </span><span style={{  display : 'inline-block'}}> non-custodial way & never </span><span style={{display : 'inline-block'}}>takes custody over the </span><span style={{  display : 'inline-block'}}>funds on your account</span><br/><br/></div>
                    </div>

                    <div className="betterbox betterbox5">

                        <div className="headerText" >Open- <span style={{ marginRight: "60px" }}>Source</span></div>
                        <br />
                        <br />        
                        <div className="mainText"><span style={{  display : 'inline-block'}}>All transactions are available</span> <span style={{  display : 'inline-block'}}>publicly via block explorers</span><span style={{  display : 'inline-block'}}> and the entire codebase </span><span style={{  display : 'inline-block'}}>and documents are publicly</span> accessible</div>
                    </div>

                    <div className="betterbox betterbox5">

                        <div className="headerText">Secure <span style={{ marginRight: "60px" }}>& audited</span></div>
                        <br />
                        <br />        
                        <div className="mainText"><span style={{  display : 'inline-block'}}>Xade codebase is tested </span><span style={{  display : 'inline-block'}}>through multiple simulations </span><span style={{  display : 'inline-block'}}>and has underwent audits </span><span style={{  display : 'inline-block'}}>from individual auditors and </span>reputable firms</div>
                    </div>


                </div>
                <br />
                <br />
            </div>
        </>
    )
}

export default Security