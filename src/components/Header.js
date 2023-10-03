import React, { useEffect, useRef } from "react";
import "../styles/style.css";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { useState } from "react";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import { Web3Button } from "@web3modal/react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

export default function Header() {
  const { open, close } = useWeb3Modal();
  const [trackindex, setTrackindex] = useState(false);
  const { address, connector: activeConnector, isConnected } = useAccount();
  const [PoolBack, setPoolBack] = useState(true);
  const navigate = useNavigate();
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const toggleIndex = () => {
    open();
    setTrackindex(true);
  };

  let truncatedAddress;

  if (address) {
    truncatedAddress = address.substring(0, 7);
  }

  const account = useAccount();

  const WalletInfo = () => {
    // Get account info after wallet connect
    const account = useAccount();
    return (
      <div>
        Address: {account.address} <br />
        Balance: {account.balance}
      </div>
    );
  };
  const openDepositModal = () => {
    setWithdrawModalOpen(false); // Close the Withdraw modal if it's open
    setDepositModalOpen(true);
  };

  const openWithdrawModal = () => {
    setDepositModalOpen(false); // Close the Deposit modal if it's open
    setWithdrawModalOpen(true);
  };

  const closeModal = () => {
    setDepositModalOpen(false);
    setWithdrawModalOpen(false);
  };

  return (
    <>
      <section
        className="smart-scroll"
        id={trackindex ? "" : "smart-scrollweb3"}
        style={{ background: "rgba(0,0,0,0.75" }}
      >
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="#">
              <div className="name">XADE</div>
            </a>

            <div className="wb">
              {isConnected ? (
                <>
                  {" "}
                  <div
                    className="webappconnectedh wap"
                    onClick={toggleIndex}
                    style={{ fontFamily: "Regular" }}
                  >
                    {account.balance}
                    <span id="balance">0.10tMATIC</span> &nbsp; &nbsp;
                    <div className="wacd">
                      <span>{truncatedAddress}</span>
                      &nbsp; &nbsp; &nbsp;
                      <img
                        src={process.env.PUBLIC_URL + "/Media/pfp.jpeg"}
                        style={{
                          height: 27,
                          borderRadius: 30,
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div
                    className="webapp wap1"
                    onClick={toggleIndex}
                    style={{ fontFamily: "Regular" }}
                  >
                    <div className="greytack">
                      <span>Connect Wallet</span>&nbsp;
                      <PowerSettingsNewOutlinedIcon fontSize="small" />
                    </div>{" "}
                  </div>
                </>
              )}

              <button
                className="navbar-toggler navbar-toggler-right border-0"
                id="collapse-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ background: "black" }}
                onClick={() => {
                  const navbarCollapse =
                    document.getElementById("navbarCollapse");
                  navbarCollapse.classList.toggle("show");
                }}
              >
                <div>
                  <img src={process.env.PUBLIC_URL + "/Media/Menu.svg"} />
                </div>
                {/* <i className="fa-solid fa-bars-sort text-white" /> */}
                <span data-feather="grid" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto desktop-arrangement-navbar">
                <div>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://docs.xade.finance/"
                      className="nav-link page-scroll"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://explorers.xade.finance/"
                      className="nav-link page-scroll"
                    >
                      Premium
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link page-scroll"
                      href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
                    >
                      Blog
                    </a>
                  </li>
                </div>

                {PoolBack ? (
                  <li
                    className="poolsbtn"
                    onClick={() => {
                      navigate("/pools/BTC:USD", setPoolBack(false));
                    }}
                  >
                    <span>
                      {" "}
                      <OpacityOutlinedIcon />
                    </span>
                    <span style={{ fontWeight: "bolder" }}>Pools</span>
                  </li>
                ) : (
                  <li
                    className="poolsbtn"
                    onClick={() => {
                      navigate("/", setPoolBack(true));
                    }}
                  >
                    <span>
                      {" "}
                      <KeyboardBackspaceOutlinedIcon />
                    </span>
                    <span style={{ fontWeight: "bolder" }}>Back</span>
                  </li>
                )}

                <div>
                  &nbsp; &nbsp;
                  {isConnected ? (
                    <li
                      className="webappconnected"
                      style={{ fontFamily: "Regular" }}
                      onClick={() => open()}
                    >
                      <span>0.10tMATIC</span>
                      <div className="wacd">
                        <span>{truncatedAddress}</span>

                        <img
                          src={process.env.PUBLIC_URL + "/Media/pfp.jpeg"}
                          alt={"Connected Wallet"}
                          style={{
                            height: 27,
                            borderRadius: 30,
                          }}
                        />
                      </div>
                    </li>
                  ) : (
                    <li
                      className="webapp"
                      style={{ fontFamily: "Regular" }}
                      onClick={() => open()}
                    >
                      <div className="greytack">
                        Connect Wallet&nbsp;
                        <PowerSettingsNewOutlinedIcon fontSize="small" />
                      </div>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
