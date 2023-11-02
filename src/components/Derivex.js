import React, { useMemo } from "react";
import TradingViewWidget from "./TradingViewWidget";
import "../styles/better.css";
import "./NewCssChanges.css";
import { Col, InputNumber, Row, Space } from "antd";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWalletClient,
  useContractRead,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Drawer from "@mui/material/Drawer";
import { Anchor, Spoiler } from '@mantine/core';
import Typography from "@mui/material/Typography";

import { encodeErrorResult, parseEther, stringToHex } from "viem";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import { ethers } from "ethers";
import axios from "axios";
import ReactPlayer from "react-player";
import summaryDown from "../assets/summaryDown.png";

import {
  CLEARING_HOUSE_ADDRESS,
  BTC_BASE_TOKEN_ADDRESS,
  VAULT_ADDRESS,
  XUSD_ADDRESS,
} from "../constants/constants";
import clearingHouseABI from "../constants/abis/clearingHouseABI.json";
import xusdABI from "../constants/abis/xusdABI.json";
import vaultABI from "../constants/abis/vaultABI.json";
import "core-js/features/bigint";
import VideoPlayer from "./Videoplayer";
import derivex from "../smartContract/functions.ts";
import { Flex } from "@chakra-ui/react";
import { Approval, LaunchOutlined } from "@mui/icons-material";
import Indicator from "./Indicator";
import { Group, NativeSelect } from "@mantine/core";

const Derivex = () => {
  const [inputValue, setInputValue] = useState(1);
  const { address, connector: activeConnector, isConnected } = useAccount();
  const [value, setValue] = React.useState(1);
  const [tab, setTab] = useState(true);
  const [Menu, setMenu] = useState(1);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [Arrow, setArrow] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const { open, close } = useWeb3Modal();
  const [tohmenu, setTohmenu] = useState(1);
  const [btcprice, setBtcprice] = useState(30083.4);
  const [tabActive, setTabActive] = useState(true);
  const [summaryActive, setSummaryActive] = useState(false);
  const [amount, setAmount] = useState(0);
  const [USDamount, setUSDAmount] = useState(0);
  const { data: walletClient } = useWalletClient();
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [depositValue, setDepositValue] = useState("");
  const [withdrawValue, setWithdrawValue] = useState("");
  const [marketTradetabActive, setMarketTradeTabActive] = useState(1);
  const [swapGetResponse, setSwapGetResponse] = useState({});

  const amountArg = 56;
  const deadline = 1912176727;
  // const amount = BigInt("0.000034")

  // btc price fetching funcion
  const fetchbtcdata = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = await response.json();
      setBtcprice(data.bitcoin.usd);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const toggleSummary = () => {
    setSummaryActive(!summaryActive);
  };

  //   const getNewsData = async () => {
  //     try {
  //         const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9dd9f0cf-1bdf-437b-93f9-05a7bc164f57", {
  //             method: "GET",
  //             headers: {
  //                 "Content-type": "application/json"
  //             }
  //         });

  //         console.log('response.data',response.data)

  //     } catch (error) {
  //         console.error("An error occurred:", error);
  //     }
  // };

  // const [cryptoData, setCryptoData] = useState([]);

  //   const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`;

  //   useEffect(() => {
  //     // Function to fetch cryptocurrency data
  //     const fetchCryptoData = async () => {
  //       try {
  //         const response = await fetch(apiUrl);
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         const data = await response.json();
  //         setCryptoData(data.data);
  //         console.log('data.data',data.data);
  //       } catch (error) {
  //         console.error('Error fetching cryptocurrency data:', error);
  //       }
  //     };

  // Call the fetchCryptoData function when the component mounts
  //   fetchCryptoData();
  // }, []);

  const newsValues = [
    {
      label:
        "Crypto news: Coinbase chooses Truflation as investment of inaugural fund",
      value: "September 12, 2023, 2:27:38 PM",
    },
    {
      label:
        "Crypto news: Coinbase chooses Truflation as investment of inaugural fund",
      value: "September 12, 2023, 2:27:38 PM",
    },
    {
      label:
        "Crypto news: Coinbase chooses Truflation as investment of inaugural fund",
      value: "September 12, 2023, 2:27:38 PM",
    },
    {
      label:
        "Crypto news: Coinbase chooses Truflation as investment of inaugural fund",
      value: "September 12, 2023, 2:27:38 PM",
    },
    {
      label:
        "Crypto news: Coinbase chooses Truflation as investment of inaugural fund",
      value: "September 12, 2023, 2:27:38 PM",
    },
    {
      label:
        "Crypto news: Coinbase chooses Truflation as investment of inaugural fund",
      value: "September 12, 2023, 2:27:38 PM",
    },
  ];

  // const tradeSelector = () => {
  //   if (value < 10){
  //     setTabActive(true);
  //   }
  //   else{
  //     setTabActive(false);
  //   }
  // }

  useEffect(() => {
    // Fetch data initially
    fetchbtcdata();
    // getNewsData();
    // Set up an interval to fetch data every minute (60,000 milliseconds)
    const fetchInterval = setInterval(fetchbtcdata, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, []);

  // ----- Ashwath--------
  // const params = {
  //   baseToken: BTC_BASE_TOKEN_ADDRESS,
  //   isBaseToQuote: true,
  //   isExactInput: false,
  //   /* eslint-disable */
  //   amount: parseEther(amount * Math.trunc(value / 10)),
  //   oppositeAmountBound: parseEther("0"),
  //   deadline: Math.floor(Date.now() / 1000) + 60 * 20, //  20 minutes from now
  //   sqrtPriceLimitX96: 0,
  //   referralCode: stringToHex("0", { size: 32 }), // Convert string referral code to bytes32
  // };
  // const { config: setOpenPositionLongConfig } = usePrepareContractWrite({
  //   address: CLEARING_HOUSE_ADDRESS,
  //   abi: clearingHouseABI,
  //   // overrides: {
  //   //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  //   // },
  //   functionName: "openPosition",
  //   args: [
  //     params,
  //     // {
  //     //   baseToken:  BTC_BASE_TOKEN_ADDRESS,
  //     //   isBaseToQuote: false,
  //     //   isExactInput: true,
  //     //   amount: amountArg,
  //     //   oppositeAmountBound: 0,
  //     //   deadline : deadline,
  //     //   sqrtPriceLimitX96: 0,
  //     //   referralCode: ethers.constants.HashZero,
  //     // },
  //   ], // TODO: Change args from "56" to an amountArg variable
  // });

  const { writeAsync: submitOpenPositionLong } = useContractWrite({
    address: CLEARING_HOUSE_ADDRESS,
    abi: clearingHouseABI,
    // overrides: {
    //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
    // },
    functionName: "openPosition",
    // ...setOpenPositionLongConfig,
    // async onSuccess(data) {
    //   // You can add Snackbar notifications such as from https://notistack.com/
    //   await enqueueSnackbar("Success");
    // },
    // async onError(data) {
    //   // You can add Snackbar notifications such as from https://notistack.com/
    //   await enqueueSnackbar("Failure");
    // },
  });

  //con

  //deposit
  const { config: setDepositConfig } = usePrepareContractWrite({
    address: VAULT_ADDRESS,
    abi: vaultABI,
    // overrides: {
    //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
    // },
    functionName: "deposit",
    args: [XUSD_ADDRESS, depositValue * 10 ** 18], // TODO: Change args from "56" to an amountArg variable
  });

  const { writeAsync: depositToken, isSuccess: isDepositSuccess } =
    useContractWrite({
      ...setDepositConfig,
      onSuccess(data) {
        // submitOpenPositionLong?.();
        console.log("deposit success called");
        enqueueSnackbar("Deposit Success");
      },
      onError(data) {
        // You can add Snackbar notifications such as from https://notistack.com/
        enqueueSnackbar("Deposit Failure");
      },
    });

  const { data: XUSD_ALLOWANCE } = useContractRead({
    address: XUSD_ADDRESS,
    abi: xusdABI,
    functionName: "allowance",
    args: [address, VAULT_ADDRESS],
  });

  const { config: setAprroveConfig } = usePrepareContractWrite({
    address: XUSD_ADDRESS,
    abi: xusdABI,
    // overrides: {
    //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
    // },
    functionName: "approve",
    args: [VAULT_ADDRESS, depositValue * 10 ** 18], // TODO: Change args from "56" to an amountArg variable
  });

  const { writeAsync: approveToken, isSuccess: isApproveSuccess } =
    useContractWrite({
      ...setAprroveConfig,
      async onSuccess(data) {
        enqueueSnackbar("Approve Success");
      },
      onError(data) {
        // You can add Snackbar notifications such as from https://notistack.com/
        enqueueSnackbar("Approve Failure");
      },
    });

  /// ------end-----

  const onPositionSubmitClick = async () => {
    if (value > XUSD_ALLOWANCE) {
      await approveToken?.();
      return;
    }
    const params = {
      baseToken: XUSD_ADDRESS,
      isBaseToQuote: true,
      isExactInput: true, // true for xusd, false for btc ---> long
      /* eslint-disable */
      amount: Number(amount * Math.trunc(value / 10)), // for decimal value *10**18 -> 18 decimals
      oppositeAmountBound: parseEther("0"),
      deadline: Math.floor(Date.now() / 1000) + 60 * 20, //  20 minutes from now
      sqrtPriceLimitX96: 0,
      referralCode: stringToHex("0", { size: 32 }), // Convert string referral code to bytes32
    };

    await submitOpenPositionLong({ args: [params] });
  };

  const [rows1, setRows] = useState([
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    // Add more data objects here if needed
  ]);

  const createData = (price, size, time) => {
    return { price, size, time };
  };

  const rows = [
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
    createData("34,844", 0.18174, "18:12:20"),
  ];

  const handleDeleteRow = (index, event) => {
    // Create a new array without the row to be deleted
    const updatedRows = rows1.filter((_, i) => i !== index);

    setRows(updatedRows);
    if (isNarrowScreen) {
      event.stopPropagation();
    }
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const Table = ({ data }) => {
    return (
      <table className="table2">
        <thead>
          <tr>
            <th>Price</th>
            <th>Size (BTC)</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ color: "rgba(94,217,151,1)" }}>{item.price}</td>
              <td>{item.size}</td>
              <td style={{ color: "#747677", display: "flex", gap: "5px" }}>{item.time} <LaunchOutlined fontSize="small" htmlColor="#3A8477" /></td>
              {/* Add your Market Trade data here, e.g., <td>{item.marketTrade}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const Input = styled(MuiInput)`
    width: 42px;
  `;

  const innerRef = useRef();
  const outerRef = useRef();
  const oRef = useRef();

  function LeftButton({ show, onClick }) {
    return (
      show && (
        <button className="scroll-button" onClick={onClick}>
          <KeyboardArrowLeftIcon sx={{ color: "white" }} />
        </button>
      )
    );
  }

  function RightButton({ show, onClick }) {
    return (
      show && (
        <button id="sb" onClick={onClick}>
          <KeyboardArrowRightIcon sx={{ color: "white" }} />
        </button>
      )
    );
  }

  useEffect(() => {
    const computedStyle = window.getComputedStyle(outerRef.current);
    const displayStatus = computedStyle.getPropertyValue("display");
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth <= 660) {
      setArrow(true);
    } else {
      setArrow(false);
    }
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 804);
      if (innerRef.current.scrollWidth > innerRef.current.clientWidth) {
        setShowRight(true);
      } else {
        setShowRight(false);
      }
    };

    const handleScroll = () => {
      if (innerRef.current.scrollLeft === 0) {
        setShowLeft(false);
      } else {
        setShowLeft(true);
      }

      if (
        innerRef.current.scrollLeft + innerRef.current.clientWidth ===
        innerRef.current.scrollWidth ||
        innerRef.current.scrollLeft !== 0
      ) {
        setShowRight(false);
      } else {
        setShowRight(true);
      }
    };

    innerRef.current.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      if (innerRef.current) {
        innerRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [Arrow]);

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }

    if (value < 10) {
      setTabActive(true);
    } else {
      setTabActive(false);
    }
  };

  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="bottom" title={value}>
        {children}
      </Tooltip>
    );
  }

  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };

  const onIChange = (value) => {
    console.log("changed", value);
  };

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const marks = [
    {
      value: 10,
      label: "1",
    },
    {
      value: 100,
      label: "10",
    },
  ];

  const leverageMarksLong = [
    {
      value: 10,
      label: "1",
    },
    {
      value: 30,
      label: "3",
    },
    {
      value: 50,
      label: "5",
    },
    {
      value: 70,
      label: "7",
    },
    {
      value: 90,
      label: "9",
    },
  ];

  const leverageMarksShort = [
    {
      value: -90,
      label: "9",
    },
    {
      value: -70,
      label: "7",
    },
    {
      value: -50,
      label: "5",
    },
    {
      value: -30,
      label: "3",
    },
    {
      value: -10,
      label: "1",
    },
  ];

  function valuetext(value) {
    setInputValue(value);
    return `${value}°C`;
  }

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    // setValue(Math.floor(event.target.value/10));
    // console.log('Math.floor(event.target.value/10)',Math.floor(event.target.value/10))
    // if (newValue < 10) {
    //   setTabActive(true);
    // } else {
    //   setTabActive(false);
    // }
  };

  const handleLeftScroll = () => {
    innerRef.current.scrollTo({
      left: innerRef.current.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const handleRightScroll = () => {
    innerRef.current.scrollTo({
      left: innerRef.current.scrollLeft + 100,
      behavior: "smooth",
    });
  };
  // JavaScript modal code

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
  const handleChange = (event) => {
    setDepositValue(event.target.value);
  };
  const handleWChange = (event) => {
    setWithdrawValue(event.target.value);
  };
  const depositValueRecord = async () => {
    console.log("deposit fn call", depositValue, XUSD_ALLOWANCE);
    if (depositValue > XUSD_ALLOWANCE) {
      await approveToken?.();
      return;
    }

    await depositToken?.();
  };
  const withdrawValueRecord = (event) => {
    console.log({ withdrawValue });
  };
  // const getLiveVideoAndMarketNews = async () => {
  //   try {
  //     const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  //     const data = response.data;
  //     console.log('data',data);
  //   } catch (error) {
  //     console.error("error",error);
  //   }
  // };

  // useEffect(() => {
  //   getLiveVideoAndMarketNews()
  // },[])

  return (
    <>
      <SnackbarProvider />
      <div className="dwArea">
        {/* <div className="dwSection">
          <button className="depositBtn" onClick={openDepositModal}>
            Deposit
          </button>
          <button className="withdrawBtn" onClick={openWithdrawModal}>
            Withdraw
          </button>
        </div> */}

        {isDepositModalOpen && (
          <div className="depositModal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="dwAmount">Deposit Amount</div>
            <div className="modal-content">
              <input
                className="inputBox"
                type="number"
                placeholder="Enter deposit amount"
                onChange={handleChange}
                value={depositValue}
              />
            </div>
            <div className="subBtn">
              <button className="submitBtn" onClick={depositValueRecord}>
                Submit
              </button>
            </div>
          </div>
        )}

        {isWithdrawModalOpen && (
          <div className="withdrawModal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="dwAmount">Withdrawal Amount</div>

            <div className="modal-content">
              <input
                className="inputBox"
                type="number"
                placeholder="Enter withdrawal amount"
                onChange={handleWChange}
                value={withdrawValue}
              />
            </div>
            <div className="subBtn">
              <button className="submitBtn" onClick={withdrawValueRecord}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="lol" id="derivexlol">
        {/* twap - trading view widget and panel */}
        <div className="tvwap">
          <div className="tvw">
            <div className="tvwc">
              <div className="tvwch">
                <div className=" tvwch-1">
                  <div className="tvwch-1c">
                    <img src="https://gains.trade//_next/static/media/btc.fdaa3ece.svg" />
                    <span>BTC/USD</span>
                  </div>
                </div>
                <div
                  className="  tvwch-2"
                  style={{ display: "flex", flexDirection: "row", width: "auto", fontFamily: "Montreal" }}
                >
                  <div
                    className="tvwch-2-1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>$</span>
                    <span>{btcprice}</span>
                  </div>
                  <div className="tvwch-2-2">
                    <span>+0.00</span>
                  </div>
                </div>

                <div className="tvwhm" ref={Arrow === false ? innerRef : oRef}>
                  <LeftButton show={showLeft} onClick={handleLeftScroll} />
                  {
                    Menu != 1 ?
                      <>
                        <div className=" tv tvwch-2">
                          <span className="oi">Mark Price</span>

                          <span className="oid">14.6M / 22M</span>
                        </div>

                        <div className=" tv tvwch-2">
                          <span className="oi">Index Price</span>

                          <span className="oid">361.6k / 22M</span>
                        </div>

                        <div className="tv tvwch-2">
                          <div className="tvwch-3-1">
                            <span>Volume (24h)</span>
                          </div>
                          <div className="tvwch-4-2">
                            <span>0.0067%</span>
                          </div>
                        </div>

                        <div className="tv tvwch-2">
                          <div className="tvwch-3-1">
                            <span id="vq1">Funding Rate (8h)</span>
                          </div>
                          <div className="tvwch-5-2">
                            <span>0.0033%</span>
                          </div>
                        </div>
                      </>
                      :
                      null
                  }
                </div>

                {/* <div className="dwSection">
                  <button className="depositBtn" onClick={openDepositModal}>
                    Deposit
                  </button>
                  <button className="withdrawBtn" onClick={openWithdrawModal}>
                    Withdraw
                  </button>
                </div>
                
                {isDepositModalOpen && (
                  <div className="depositModal" style={{ display: "none" }}>
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <div className="dwAmount">Deposit Amount</div>
                    <div className="modal-content">
                      <input
                        className="inputBox"
                        type="number"
                        placeholder="Enter deposit amount"
                      />
                    </div>
                    <div className="subBtn">
                      <button className="submitBtn">Submit</button>
                    </div>
                  </div>
                )}

                
                {isWithdrawModalOpen && (
                  <div className="withdrawModal" style={{ display: "none" }}>
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <div className="dwAmount">Withdrawal Amount</div>

                    <div className="modal-content">
                      <input
                        className="inputBox"
                        type="number"
                        placeholder="Enter withdrawal amount"
                      />
                    </div>
                    <div className="subBtn">
                      <button className="submitBtn">Submit</button>
                    </div>
                  </div>
                )}  */}

                {Arrow === false ? (
                  <RightButton show={showRight} onClick={handleRightScroll} />
                ) : null}
              </div>
              <div className="tvwamtc" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {/* MARKET TRADES SECTION START */}

                  <div
                    className="tvwnshmt1"
                    style={{
                      borderRight: "1px solid #232325",
                      maxHeight: "none",
                      height: "inherit",
                    }}
                  >
                    <div
                      className="tvwnshl"
                      id="tvwnshm1"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        height: "auto",
                        padding: "14px 0"
                      }}
                    >
                      Market Trades
                    </div>
                    <div className="tablecontainer">
                      <Table data={rows} />
                    </div>
                  </div>
                  {/* SECTION END */}

                  <TradingViewWidget />
                </div>
                <div className="tvhmn" ref={outerRef}>
                  <div className="tvwhm" ref={Arrow === true ? innerRef : oRef}>
                    <LeftButton show={showLeft} onClick={handleLeftScroll} />
                    <div className=" tv tvwch-2">
                      <span className="oi">Open Interest(L)</span>

                      <span className="oid">14.6M / 22M</span>
                    </div>

                    <div className=" tv tvwch-2">
                      <span className="oi">Open Interest(S)</span>

                      <span className="oid">361.6k / 22M</span>
                    </div>

                    <div className="tv tvwch-2">
                      <div className="tvwch-3-1">
                        <span>Borrowing (L)</span>
                      </div>
                      <div className="tvwch-4-2">
                        <span>0.0067%</span>
                      </div>
                    </div>

                    <div className="tv tvwch-2">
                      <div className="tvwch-3-1">
                        <span>Borrowing (S)</span>
                      </div>
                      <div className="tvwch-4-2">
                        <span>0.0000%</span>
                      </div>
                    </div>

                    <div className="tv tvwch-2">
                      <div className="tvwch-3-1">
                        <span id="vq1">Rollover</span>
                      </div>
                      <div className="tvwch-5-2">
                        <span>0.0033%</span>
                      </div>
                    </div>
                    <RightButton show={showRight} onClick={handleRightScroll} />
                  </div>
                </div>
                <div className="tvwp" id="tvwp1">
                  <div className="tvwpht">
                    <div className="tvwpht2-m">
                      <button
                        onClick={() => setMenu(1)}
                        id={Menu === 1 ? "tvwpht2-mb" : ""}
                      >
                        Spot
                      </button>
                      <button
                        onClick={() => setMenu(2)}
                        id={Menu === 2 ? "tvwpht2-mb" : ""}
                      >
                        Margin
                      </button>
                      <button
                        onClick={() => setMenu(3)}
                        id={Menu === 3 ? "tvwpht2-mb" : ""}
                      >
                        Algo
                      </button>
                    </div>
                    <div className="tvwpht2">
                      <Group mt={10} justify="center">
                        <NativeSelect w={100} data={["Market", "Limit", "Stop"]} />
                        {/* <div className=" tradeTabHolder">
                          <div
                            className={`cursor tradeTabs ${marketTradetabActive === 1 && " longTradeTabs"
                              }`}
                            onClick={() => {
                              setMarketTradeTabActive(1);
                              // setValue(0);
                            }}
                          >
                            <span style={{ margin: "3px", fontSize: "16px" }}>
                              Market
                            </span>
                          </div>
                          <div
                            className={`cursor tradeTabs ${marketTradetabActive === 2 && " shortTradeTabs"
                              }`}
                            style={{}}
                            onClick={() => {
                              setMarketTradeTabActive(2);
                              // setValue(0);
                            }}
                          >
                            <span style={{ margin: "3px", fontSize: "16px" }}>
                              Limit
                            </span>
                          </div>
                          <div
                            className={`cursor tradeTabs ${marketTradetabActive === 3 && " shortTradeTabs"
                              }`}
                            style={{}}
                            onClick={() => {
                              setMarketTradeTabActive(3);
                              // setValue(0);
                            }}
                          >
                            <span style={{ margin: "3px", fontSize: "16px" }}>
                              Stop
                            </span>
                          </div>
                        </div> */}
                      </Group>
                      <div className="tvwpht1">
                        <button
                          onClick={() => setTab(true)}
                          id={tab ? "tvwphtll" : ""}
                        >
                          BUY
                        </button>
                        <button
                          onClick={() => setTab(false)}
                          id={tab == false ? "tvwphtls" : ""}
                        >
                          SELL
                        </button>
                      </div>
                      <div className={Menu === 3 ? "tscs" : "tscsn"}>
                        <span style={{ padding: "10px" }}>Coming Soon</span>
                      </div>
                      <div
                        className={
                          Menu !== 3 ? "tvwphtcontainer" : "tvwphtcontainer23"
                        }
                      >
                        <div className="tvwpht2-c">
                          <div className="tvwpht2-c1">
                            Collateral <span>(50-250k)</span>
                          </div>
                          <div className="tvwpht2-c2">
                            <input
                              type="text"
                              value={amount}
                              onChange={(e) =>
                                setAmount(Number(e.target.value))
                              }
                            ></input>
                          </div>
                        </div>
                        {Menu === 2 ?
                          <div className="tvwpht2-r">
                            <div className="tvwpht2-r1">
                              <div className="tvwpht2-r1-1">
                                Leverage<span> (1-10x)</span>
                              </div>
                              <div className="tvwpht2-r1-2">
                                <Col span={4}>
                                  <Input
                                    value={Math.trunc(value / 10)}
                                    size="small"
                                    onChange={onChange}
                                    onBlur={handleBlur}
                                    inputProps={{
                                      min: 1,
                                      max: 10,
                                      type: "number",
                                      "aria-labelledby": "Custom marks",
                                    }}
                                    sx={{
                                      "& .MuiInput-input": {
                                        color: "white",
                                        backgroundColor: "black",
                                        width: 82,
                                        height: 20, // Update the height here
                                        borderRadius: 1,
                                      },
                                      ".MuiInputBase-input": {
                                        width: 77,
                                        paddingLeft: 1.8,
                                      },
                                      "&.MuiInputBase-root": {
                                        width: 101,
                                        marginTop: 0.5,
                                      },
                                    }}
                                  />
                                </Col>
                              </div>
                            </div>
                            <div className="tvwpht2-r2">
                              {/* <Slider
                            aria-label="Custom marks"
                            defaultValue={1}
                            max={10}
                            getAriaValueText={valuetext}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            marks={marks}
                            sx={{
                              " .MuiSlider-markLabel": {
                                color: "#82828F", // Set the desired mark label color here
                              },
                              ".MuiSlider-rail": {
                                color: "#282C3B",
                                height: "10px",
                              },
                              "& .MuiSlider-thumb": {
                                width: 15,
                                height: 15,
                                border: " 2px solid white",
                                color: "#282C3B",
                              },
                              "	.MuiSlider-track": {
                                backgroundColor: "#D65CD9",
                                height: "10px",
                                border: "0px",
                              },
                              ".MuiSlider-valueLabel:before": {
                                width: "0px",
                              },
                            }}
                          /> */}
                              <Slider
                                value={typeof value === "number" ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                valueLabelDisplay="auto"
                                marks={marks}
                                valueLabelFormat={Math.trunc(value / 10)}
                                getAriaValueText={(e) => e}
                                sx={{
                                  ".MuiSlider-markLabel": {
                                    color: "#82828F", // Set the desired mark label color here
                                  },
                                  ".MuiSlider-mark": {
                                    display: "none",
                                  },

                                  ".MuiSlider-rail": {
                                    color: "#1D1D1D",
                                    height: "10px",
                                    opacity: 1,
                                    zIndex: 1,
                                  },
                                  ".MuiSlider-thumb": {
                                    width: 15,
                                    height: 15,
                                    border: " 2px solid white",
                                    color: "#282C3B",
                                  },
                                  "	.MuiSlider-track": {
                                    backgroundColor: "#D65CD9",
                                    height: "10px",
                                    border: "0px",
                                  },
                                  ".MuiSlider-valueLabel:before": {
                                    width: "0px",
                                  },
                                }}
                              />
                            </div>
                          </div>
                          :
                          null
                        }

                        <div className="tvwpht2-p">
                          <div className="tvwpht2-p1">
                            <div className="tvwpht2-p1-1">Price</div>
                            <div className="tvwpht2-p1-2">Slippage(%)</div>
                          </div>
                          <div className="tvwpht2-p2">
                            <div className="tvwpht2-p2-1">
                              <span>30415</span>
                            </div>
                            <div className="tvwpht2-p2-2">
                              <InputNumber
                                min={1}
                                id="p2-2i"
                                defaultValue={1}
                                style={{
                                  marginRight: 6,
                                  marginTop: 3,
                                  backgroundColor: "black",
                                  outline: "none",
                                  borderStyle: "none",
                                  color: "white",
                                }}
                                onChange={onIChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* <div className='tvwpht2-s'>

                                            <div className='tvwpht2-s1'>
                                                <div className='tvwpht2-s1-1'>
                                                    Stop Loss <span className='tvwpht2-s1-span'>(None)</span>
                                                </div>
                                                <div className='tvwpht2-s1-2'>
                                                    <span className='tvwpht2-s1-span'>None</span>
                                                </div>
                                            </div>
                                            <div className='tvwpht2-s2'>

                                                <div className='tvwpht2-s2-1'>

                                                    <button className='tvwpht2-s2-1-c' >NONE</button>
                                                    <button className='tvwpht2-s2-1-c' >-10%</button>
                                                    <button className='tvwpht2-s2-1-c' >-25%</button>
                                                    <button className='tvwpht2-s2-1-c' >-50%</button>
                                                    <button className='tvwpht2-s2-1-c' >-75%</button>
                                                    <input className='tvwpht2-s2-1-c' type='text' placeholder='PRICE' />
                                                </div>
                                            </div>

                                        </div> */}
                        {/* <div className='tvwpht2-t'>

                                            <div className='tvwpht2-t1'>
                                                <div className='tvwpht2-t1-1'>
                                                    Take Profit <span className='tvwpht2-t1-span'>(168166)</span>
                                                </div>
                                                <div className='tvwpht2-t1-2'>
                                                    <span className='tvwpht2-t1-span'>None</span>
                                                </div>
                                            </div>
                                            <div className='tvwpht2-t2'>

                                                <div className='tvwpht2-t2-1'>

                                                    <button className='tvwpht2-t2-1-c' >25%</button>
                                                    <button className='tvwpht2-t2-1-c' >50%%</button>
                                                    <button className='tvwpht2-t2-1-c' >100%</button>
                                                    <button className='tvwpht2-t2-1-c' >300%</button>
                                                    <button className='tvwpht2-t2-1-c' >900%</button>
                                                    <input className='tvwpht2-t2-1-c' type='text' placeholder='PRICE' />
                                                </div>
                                            </div>

                                        </div> */}
                        {/* onClick={() => submitOpenPositionLong?.()} */}
                        <div className="tvwpht2-btn">
                          {
                            Menu === 1 ?
                              isConnected ? (
                                <button onClick={() => { }}>MARKET (LONG)</button>
                              ) : (
                                <div
                                  className="bcont"
                                  onClick={() => {
                                    open();
                                  }}
                                >
                                  <span>CONNECT WALLET</span>
                                </div>
                              )
                              :
                              <div
                                className="bcont"
                                style={{ backgroundColor: "#1D1D1D", cursor: "not-allowed" }}
                              >
                                <span>COMING SOON</span>
                              </div>
                          }
                        </div>

                        <div className="tvwphyt2-mc">
                          <div className="tvwphyt2-m">
                            <span
                              className="tvwphyt2-m-spanl"
                              id="tvwphyt2-m-spanl-hl"
                            >
                              BTC/USD
                            </span>
                            {isConnected ? (
                              <span
                                className="tvwphyt2-m-spanr"
                                id="tvwphyt2-m-spanl-hr"
                              >
                                POSITION SIZE {"<"} {"  "} 1,500 DAI
                              </span>
                            ) : (
                              <span
                                className="tvwphyt2-m-spanr"
                                id="tvwphyt2-m-spanl-hr"
                              >
                                WALLET NOT CONNECTED
                              </span>
                            )}
                          </div>
                          <div className="tvwphyt2-m">
                            <span className="tvwphyt2-m-spanl">
                              EST. EXECUTION PRICE
                            </span>
                            <span className="tvwphyt2-m-spanr">30740.6</span>
                          </div>
                          <div className="tvwphyt2-m">
                            <span className="tvwphyt2-m-spanl">SPREAD</span>
                            <span className="tvwphyt2-m-spanr">0.04%</span>
                          </div>
                          <div className="tvwphyt2-m">
                            <span className="tvwphyt2-m-spanl">
                              POSITION SIZE
                            </span>
                            <span className="tvwphyt2-m-spanr">100 DAI</span>
                          </div>
                          <div className="tvwphyt2-m">
                            <span className="tvwphyt2-m-spanl">FEES</span>
                            <span className="tvwphyt2-m-spanr">0.1 DAI</span>
                          </div>
                          <div className="tvwphyt2-m">
                            <span className="tvwphyt2-m-spanl">LIQ. PRICE</span>
                            <span className="tvwphyt2-m-spanr">16907.6</span>
                          </div>
                          <div className="tvwphyt2-m">
                            <span className="tvwphyt2-m-spanl">
                              EST. BORROWING FEE / H
                            </span>
                            <span className="tvwphyt2-m-spanr">0.0 DAI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="marketNewsContainer"
                  style={{ height: "22rem" }}
                >
                  <div
                    className="tvwns"
                    style={{
                      height: "inherit",
                      borderBottom: "1px solid #232325",
                    }}
                  >
                    <div
                      className="transactionHistoryContainer"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div className="tvwnshl">
                        &nbsp;&nbsp;&nbsp;
                        <button
                          onClick={() => {
                            setTohmenu(1);
                          }}
                        >
                          Portfolio
                        </button>
                        <button
                          onClick={() => {
                            setTohmenu(2);
                          }}
                        >
                          Orders
                        </button>
                        <button
                          onClick={() => {
                            setTohmenu(3);
                          }}
                        >
                          Deposits
                        </button>
                      </div>

                      {isConnected ? (
                        <>
                          {/* <div className="tvwnshr1" id={tohmenu === 1 ? "q" : "were"}>
                    <table className="table1">
                      <thead>
                        <tr>
                          {isNarrowScreen ? (
                            <>
                              <th>Type</th>
                              <th>Pair</th>
                              <th>SL/TP</th>
                              <th>Net Pnl</th>
                              <th>Close</th>
                            </>
                          ) : (
                            <>
                              <th>Type</th>
                              <th>Pair</th>
                              <th>Leverage</th>
                              <th>Collateral</th>
                              <th>Open Price</th>
                              <th>Price</th>
                              <th>Liq/SL</th>
                              <th>Take Profit</th>
                              <th>Net Pnl</th>
                              <th>Close</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {rows1.map((item, index) => (
                          <tr key={index} onClick={() => handleRowClick(item)}>
                            {isNarrowScreen ? (
                              <>
                                <td>{item.type}</td>
                                <td>
                                  <span>
                                    {item.icon && (
                                      <img
                                        style={{
                                          width: "15px",
                                          marginRight: "5px",
                                        }}
                                        src={item.icon}
                                        alt="Icon"
                                      />
                                    )}
                                  </span>
                                  {item.pair}
                                </td>
                                <td>SL/TP</td>
                                <td>{item.netPnl}</td>
                                <td className="tdclose">
                                  <button
                                    onClick={(event) =>
                                      handleDeleteRow(index, event)
                                    }
                                  >
                                    x
                                  </button>
                                </td>
                              </>
                            ) : (
                              <>
                                <td>{item.type}</td>
                                <td>
                                  <span>
                                    {item.icon && (
                                      <img
                                        style={{
                                          width: "15px",
                                          marginRight: "5px",
                                        }}
                                        src={item.icon}
                                        alt="Icon"
                                      />
                                    )}
                                  </span>
                                  {item.pair}
                                </td>
                                <td>{item.leverage}</td>
                                <td>{item.collateral}</td>
                                <td>{item.openPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.liqSl}</td>
                                <td>{item.takeProfit}</td>
                                <td>{item.netPnl}</td>
                                <td className="tdclose">
                                  <button
                                    onClick={() => handleDeleteRow(index)}
                                  >
                                    x
                                  </button>
                                </td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> */}
                          <div className="tvwnshr">
                            <span style={{ color: "#82828F" }}>No Trades</span>
                          </div>
                        </>
                      ) : (
                        <div
                          className="tvwnshr"
                          style={{
                            alignSelf: "center",
                            height: "100%",
                          }}
                        >
                          {
                            tohmenu === 1 ?
                              <span style={{ color: "#82828F" }}>
                                Your positions and investments appear here
                              </span>
                              :
                              null
                          }
                          {
                            tohmenu === 2 ?
                              <span style={{ color: "#82828F" }}>
                                Your order history appears here
                              </span>
                              :
                              null
                          }
                          {
                            tohmenu === 3 ?
                              <span style={{ color: "#82828F" }}>
                                Your deposits appear here
                              </span>
                              :
                              null
                          }
                          {/* {" "}&nbsp;&nbsp;{" "}
                          <button
                            onClick={() => {
                              open();
                            }}
                          >
                            Connect
                          </button> */}
                        </div>
                      )}

                      {isNarrowScreen && (
                        <Drawer
                          anchor="bottom"
                          open={isDrawerOpen}
                          onClose={handleDrawerClose}
                          sx={{
                            "& .MuiDrawer-paper": {
                              borderRadius: "15px 15px 0 0",
                              borderColor: "#121216",
                              outline: "none",
                              borderTop: "0.5px solid #3deca7;",
                            },
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              backgroundColor: "#121216",
                              width: "100%",
                              padding: 16,
                              paddingBottom: 6,
                              height: "70vh",
                            }}
                          >
                            <div className="drawerheader">
                              <div className="dh1">
                                <div>
                                  <img src="https://gains.trade//_next/static/media/btc.fdaa3ece.svg" />
                                  &nbsp;<span>BTC/USD</span>
                                </div>
                              </div>
                              <span>LONG</span>
                            </div>
                            <div className="maincontentdrawer">
                              <table className="drawertable">
                                <tbody>
                                  {selectedRow && (
                                    <>
                                      <tr>
                                        <th>Type</th>{" "}
                                        <td>{selectedRow.type}</td>
                                      </tr>

                                      <tr>
                                        <th>Leverage</th>{" "}
                                        <td>{selectedRow.leverage}</td>
                                      </tr>
                                      <tr>
                                        <th>Collateral</th>{" "}
                                        <td>{selectedRow.collateral}</td>
                                      </tr>
                                      <tr>
                                        <th>Open Price</th>{" "}
                                        <td>{selectedRow.openPrice}</td>
                                      </tr>
                                      <tr>
                                        <th>Price</th>{" "}
                                        <td>{selectedRow.price}</td>
                                      </tr>
                                      <tr>
                                        <th>Liq/SL</th>{" "}
                                        <td>{selectedRow.liqSl}</td>
                                      </tr>
                                      <tr>
                                        <th>Take Profit</th>{" "}
                                        <td>{selectedRow.takeProfit}</td>
                                      </tr>
                                      <tr>
                                        <th>Net Pnl</th>{" "}
                                        <td>{selectedRow.netPnl}</td>
                                      </tr>
                                    </>
                                  )}
                                </tbody>
                              </table>
                              <div className="sharebtn">
                                <button>Share Trade</button>
                              </div>
                            </div>
                          </div>
                        </Drawer>
                      )}
                    </div>
                    {/* <div className="tvwnshm">
                <div
                  className="tvwnshl"
                  id="tvwnshm1"
                  style={{ textAlign: "center", alignItems: "center" }}
                >
                  Market Trades
                </div>
                <div className="tablecontainer">
                  <Table data={rows} />
                </div>
              </div> */}

                    <div className="blogNewsContainer">
                      <div
                        className="blogNewsBody"
                        style={{
                          height: "calc(100% - 54px)",
                        }}
                      >
                        {/* <script src="https://static.cryptopanic.com/static/js/widgets.min.js"></script>
                        <a
                          href="https://cryptopanic.com/"
                          target="_blank"
                          data-news_feed="recent"
                          data-bg_color="#FFFFFF"
                          data-text_color="#333333"
                          data-link_color="#0091C2"
                          data-header_bg_color="#30343B"
                          data-header_text_color="#FFFFFF"
                          class="CryptoPanicWidget"
                        >
                          Latest News
                        </a> */}
                        <iframe
                          width="100%"
                          scrolling="yes"
                          allowtransparency="true"
                          frameborder="0"
                          src="https://cryptopanic.com/widgets/news/?bg_color=010000&amp;font_family=sans&amp;header_bg_color=0E0F12&amp;header_text_color=FFFFFF&amp;link_color=C7C7C7&amp;news_feed=recent&amp;text_color=AEAEAE&amp;title=Latest%20News"
                          height="350px"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <Indicator />
              </div>

              {/* <div className="tvhmn" ref={outerRef}>
                <div className="tvwhm" ref={Arrow === true ? innerRef : oRef}>
                  <LeftButton show={showLeft} onClick={handleLeftScroll} />
                  <div className=" tv tvwch-2">
                    <span className="oi">Open Interest(L)</span>

                    <span className="oid">14.6M / 22M</span>
                  </div>

                  <div className=" tv tvwch-2">
                    <span className="oi">Open Interest(S)</span>

                    <span className="oid">361.6k / 22M</span>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span>Borrowing (L)</span>
                    </div>
                    <div className="tvwch-4-2">
                      <span>0.0067%</span>
                    </div>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span>Borrowing (S)</span>
                    </div>
                    <div className="tvwch-4-2">
                      <span>0.0000%</span>
                    </div>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span id="vq1">Rollover</span>
                    </div>
                    <div className="tvwch-5-2">
                      <span>0.0033%</span>
                    </div>
                  </div>
                  <RightButton show={showRight} onClick={handleRightScroll} />
                </div>
              </div> */}
            </div>

            {/* removed tvwns frome here */}
          </div>

          <div className="tvwp newTradeHolder" id="tvwp2">
            <div
              className="tvwpht newTradeContainer"
              style={{
                backgroundColor: "transparent"
              }}
            >
              {/* <div className="tvwpht1 newTradeHeading">
                
              </div> */}
              <div
                className="tvwpht2"
                style={{
                  backgroundColor: "#111111"
                }}
              >
                <Group mt={10} justify="flex-end">
                  <div className="tvwpht2-m">
                    <button
                      onClick={() => setMenu(1)}
                      id={Menu === 1 ? "tvwpht2-mb" : ""}
                    >
                      <span>Spot</span>
                    </button>
                    <button
                      onClick={() => setMenu(2)}
                      id={Menu === 2 ? "tvwpht2-mb" : ""}
                    >
                      <span>Margin</span>
                    </button>
                    <button
                      onClick={() => setMenu(3)}
                      id={Menu === 3 ? "tvwpht2-mb" : ""}
                    >
                      <span>Algo</span>
                    </button>
                  </div>
                  {/* <NativeSelect w={100} data={["Market", "Limit", "Stop"]} /> */}
                  <div className="tvwpht1">
                    <button
                      onClick={() => setMarketTradeTabActive(1)}
                      style={marketTradetabActive === 1 ? { backgroundColor: "#111111", borderBottom: "3px solid #089981", color: "#089981" } : { backgroundColor: "#111111" }}
                    >
                      Market
                    </button>
                    <button
                      onClick={() => setMarketTradeTabActive(2)}
                      style={marketTradetabActive == 2 ? { backgroundColor: "#111111", borderBottom: "3px solid #089981", color: "#089981" } : { backgroundColor: "#111111" }}
                    >
                      Limit
                    </button>
                    <button
                      onClick={() => setMarketTradeTabActive(3)}
                      style={marketTradetabActive == 3 ? { backgroundColor: "#111111", borderBottom: "3px solid #089981", color: "#089981" } : { backgroundColor: "#111111" }}
                    >
                      Stop
                    </button>
                  </div>
                  <div className="tradeTabHolder">
                    {/* <div onClick={() => setTab(true)} id={tab ? "tvwphtll" : ""}> */}
                    <div
                      className={`cursor tradeTabs ${!tabActive && " longTradeTabs"
                        }`}
                      onClick={() => {
                        setTabActive(false);
                        setValue(0);
                      }}
                    >
                      <span style={{ margin: "3px", fontSize: "16px" }}>
                        Buy
                      </span>
                    </div>
                    <div
                      className={`cursor tradeTabs ${tabActive && " shortTradeTabs"
                        }`}
                      style={{}}
                      onClick={() => {
                        setTabActive(true);
                        setValue(0);
                      }}
                    >
                      <span style={{ margin: "3px", fontSize: "16px" }}>
                        Sell
                      </span>
                    </div>
                  </div>
                </Group>
                <div
                  className={Menu === 3 ? "tscs" : "tscsn"}
                  style={
                    Menu === 3 ?
                      {
                        marginTop: 0,
                        height: "300px",
                        width: "100%",
                        alignSelf: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                      :
                      {}
                  }
                >
                  <span style={{ padding: "10px" }}>Coming Soon</span>
                </div>
                <div
                  className={
                    Menu !== 3 ? "tvwphtcontainer" : "tvwphtcontainer23"
                  }
                >
                  <div
                    className="tvwpht2-c1"
                    style={{
                      paddingLeft: 2,
                    }}
                  >
                    <span>Enter Trade Amount</span>
                    {/* <span>(50-250k)</span> */}
                  </div>
                  <div
                    className="tvwpht2-c"
                    style={{
                      marginTop: 4,
                    }}
                  >
                    <div className="tvwpht2-c2">
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                      ></input>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#303044",
                          borderRadius: 2,
                          lineHeight: "1.3rem",
                          letterSpacing: "0.06rem",
                          padding: "0 3px 0 4px",
                          marginLeft: 5,
                          marginTop: -2,
                          marginBottom: -2,
                          fontSize: "0.9rem",
                          color: "#82828F",
                          textTransform: "uppercase",
                          height: "fit-content",
                          userSelect: "none"
                        }}
                      >
                        BTC
                      </div>
                    </div>
                  </div>
                  <div
                    className="tvwpht2-c"
                    style={{
                      marginTop: 4,
                    }}
                  >
                    <div className="tvwpht2-c2">
                      <input
                        type="text"
                        value={USDamount}
                        onChange={(e) => setUSDAmount(Number(e.target.value))}
                      ></input>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#303044",
                          borderRadius: 2,
                          lineHeight: "1.3rem",
                          letterSpacing: "0.06rem",
                          padding: "0 3px 0 4px",
                          marginLeft: 5,
                          marginTop: -2,
                          marginBottom: -2,
                          fontSize: "0.9rem",
                          color: "#82828F",
                          textTransform: "uppercase",
                          height: "fit-content",
                          userSelect: "none"
                        }}
                      >
                        USD
                      </div>
                    </div>
                  </div>
                  {
                    Menu === 2 ?
                      <div className="tvwpht2-r">
                        <div className="tvwpht2-r1">
                          <div className="tvwpht2-r1-1">
                            <span> Leverage (1-10x)</span>
                          </div>
                          <div className="tvwpht2-r1-2">
                            <Col span={4}>
                              <Input
                                className="leverageInput"
                                value={Math.floor(Math.abs(value) / 10)}
                                size="small"
                                onChange={onChange}
                                onBlur={handleBlur}
                                inputProps={{
                                  min: 1,
                                  max: 10,
                                  type: "number",
                                  "aria-labelledby": "Custom marks",
                                }}
                                sx={{
                                  "& .MuiInput-input": {
                                    color: "white",

                                    // width: 82,
                                    // height: 20, // Update the height here
                                    borderRadius: 1,
                                  },
                                  ".MuiInputBase-input": {
                                    // width: 77,
                                    paddingLeft: 1.8,
                                  },
                                  "&.MuiInputBase-root": {
                                    width: 48,
                                    marginTop: 0.5,
                                  },
                                }}
                              />
                            </Col>
                          </div>
                        </div>
                        <div
                          className="tvwpht2-r2"
                          style={{ position: "relative" }}
                        >
                          <Slider
                            value={typeof value === "number" ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            // valueLabelDisplay="on"
                            valueLabelFormat={(x) => `${x}%`}
                            marks={leverageMarksLong}
                            track={"normal"}
                            getAriaValueText={(e) => e}
                            max={100}
                            min={0}
                            sx={{
                              " .MuiSlider-markLabel": {
                                color: "#82828F", // Set the desired mark label color here
                              },
                              ".MuiSlider-rail": {
                                background: "#1D1D1D",
                                height: "10px",
                                opacity: tabActive ? 1 : 1,
                                zIndex: 1,
                              },
                              "& .MuiSlider-thumb": {
                                width: 15,
                                height: 15,
                                zIndex: 200,
                                background:
                                  "linear-gradient(150deg, #d7d7d7 40%, rgba(169, 169, 169, 0) 152.01%)",
                              },
                              "	.MuiSlider-track": {
                                height: "10px",
                                border: "0px",
                                zIndex: 200,
                                background: tabActive
                                  ? "linear-gradient(270deg, #E72654 10.45%, #E72654 50.25%)"
                                  : "linear-gradient(270deg, #3CDF60 10.45%, #26E773 50.25%)",
                              },
                              ".MuiSlider-valueLabel:before": {
                                width: "0px",
                              },
                            }}
                          />
                          {/* <span
                        style={{
                          position: "absolute",
                          left: !tabActive ? `${value}%` : undefined,
                          right: tabActive
                            ? `${Math.abs(value) - 15}%`
                            : undefined,
                          transform: "translateX(-50%)",
                          bottom: "45%", // Adjust this value for vertical positioning
                          zIndex: 1,
                          color: "white",
                          backgroundColor: "#4e4e4e",
                          padding: "4px 6px",
                          display: "flex",
                          fontSize: "12px",
                          width: "15%",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "4px",
                        }}
                      >
                        {Math.trunc(Math.abs(value) / 10)}
                      </span> */}
                        </div>
                      </div>
                      :
                      null
                  }
                  <div className="priceSlippageContainer">
                    <div className="priceContainer">
                      <span className="smallText">Price</span>
                      <span style={{ fontSize: "24px" }}>$30,415.4</span>
                    </div>
                    <div className="slippageContainer">
                      <div className="smallText">
                        <span>Slippage</span>
                      </div>
                      <div>
                        {/* <Col span={4}>
                          <Input
                            value={value}
                            size="small"
                            onChange={onIChange}
                            // onBlur={handleBlur}
                            inputProps={{
                              min: 1,
                              max: 10,
                              type: "number",
                              "aria-labelledby": "Custom marks",
                            }}
                            sx={{
                              "& .MuiInput-input": {
                                color: "white",
                                backgroundColor: "black",
                                // border: "1px solid #383737",
                                // width: 82,
                                // height: 20, // Update the height here
                                borderRadius: 1,
                              },
                              ".MuiInputBase-input": {
                                // width: 77,
                                paddingLeft: 1.8,
                              },
                              "&.MuiInputBase-root": {
                                // width: 101,
                                marginTop: 0.5,
                              },
                            }}
                          />
                        </Col> */}
                        <InputNumber
                          min={1}
                          id="p2-2i"
                          defaultValue={1}
                          style={{
                            width: "4rem",
                            height: 27,
                            fontSize: "20px",

                            display: "flex",
                            alignSelf: "center",
                            backgroundColor: "black",
                            outline: "none",
                            borderStyle: "none",
                            color: "white",
                          }}
                          onChange={onIChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className='tvwpht2-s'>

                                    <div className='tvwpht2-s1'>
                                        <div className='tvwpht2-s1-1'>
                                            Stop Loss <span className='tvwpht2-s1-span'>(None)</span>
                                        </div>
                                        <div className='tvwpht2-s1-2'>
                                            <span className='tvwpht2-s1-span'>None</span>
                                        </div>
                                    </div>
                                    <div className='tvwpht2-s2'>

                                        <div className='tvwpht2-s2-1'>

                                            <button className='tvwpht2-s2-1-c' >NONE</button>
                                            <button className='tvwpht2-s2-1-c' >-10%</button>
                                            <button className='tvwpht2-s2-1-c' >-25%</button>
                                            <button className='tvwpht2-s2-1-c' >-50%</button>
                                            <button className='tvwpht2-s2-1-c' >-75%</button>
                                            <input className='tvwpht2-s2-1-c' type='text' placeholder='PRICE' />
                                        </div>
                                    </div>

                                </div> */}
                  {/* <div className='tvwpht2-t'>

                                    <div className='tvwpht2-t1'>
                                        <div className='tvwpht2-t1-1'>
                                            Take Profit <span className='tvwpht2-t1-span'>(168166)</span>
                                        </div>
                                        <div className='tvwpht2-t1-2'>
                                            <span className='tvwpht2-t1-span'>None</span>
                                        </div>
                                    </div>
                                    <div className='tvwpht2-t2'>

                                        <div className='tvwpht2-t2-1'>

                                            <button className='tvwpht2-t2-1-c' >25%</button>
                                            <button className='tvwpht2-t2-1-c' >50%%</button>
                                            <button className='tvwpht2-t2-1-c' >100%</button>
                                            <button className='tvwpht2-t2-1-c' >300%</button>
                                            <button className='tvwpht2-t2-1-c' >900%</button>
                                            <input className='tvwpht2-t2-1-c' type='text' placeholder='PRICE' />
                                        </div>
                                    </div>

                                </div> */}
                  <div
                    style={{
                      display: "flex",
                      margin: "23px 0px",
                      justifyContent: "center",
                    }}
                  >
                    {
                      Menu === 1 ?
                        isConnected ? (
                          <span
                            className="confirmTradeButton cursor"
                            style={{
                              background: tabActive ? "#E72654" : "#3EC15B",
                              color: "white",
                            }}
                            onClick={() =>
                              tabActive ? () => { } : onPositionSubmitClick()
                            }
                          >
                            Confirm {tabActive ? "Sell" : "Buy"}
                          </span>
                        ) : (
                          <div
                            className="bcont"
                            onClick={() => {
                              open();
                              console.log("wallet connected");
                            }}
                          >
                            <span>CONNECT WALLET</span>
                          </div>
                        )
                        :
                        <div
                          className="bcont"
                          style={{ backgroundColor: "#1D1D1D", cursor: "not-allowed" }}
                        >
                          <span>COMING SOON</span>
                        </div>
                    }
                  </div>
                  {/* <div className="summaryDrop" onClick={toggleSummary}>
                    <img src={summaryDown} />
                    Click to see summary
                  </div>
                  {summaryActive && ( */}
                  <div
                    className="clickSummaryContainer"
                    style={{ marginTop: "2rem" }}
                  >
                    <div className="tvwphyt2-m">
                      <span
                        className="tvwphyt2-m-spanl"
                        id="tvwphyt2-m-spanl-hl"
                      >
                        BTC/USD
                      </span>
                      {isConnected ? (
                        <span
                          className="tvwphyt2-m-spanr"
                          id="tvwphyt2-m-spanl-hr"
                        >
                          POSITION SIZE {"<"} {"  "} 1,500 DAI
                        </span>
                      ) : (
                        <span
                          className="tvwphyt2-m-spanr"
                          id="tvwphyt2-m-spanl-hr"
                        >
                          WALLET NOT CONNECTED
                        </span>
                      )}
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">
                        EST. EXECUTION PRICE
                      </span>
                      <span className="tvwphyt2-m-spanr">30740.6</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">SPREAD</span>
                      <span className="tvwphyt2-m-spanr">0.04%</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">POSITION SIZE</span>
                      <span className="tvwphyt2-m-spanr">100 DAI</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">FEES</span>
                      <span className="tvwphyt2-m-spanr">0.1 DAI</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">LIQ. PRICE</span>
                      <span className="tvwphyt2-m-spanr">16907.6</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">
                        EST. BORROWING FEE / H
                      </span>
                      <span className="tvwphyt2-m-spanr">0.0 DAI</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "16px",
                  padding: "12px 20px",
                  width: "100%",
                  backgroundColor: "#111111",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "Montreal",
                    letterSpacing: "0.1rem",
                  }}
                >
                  About
                </span>
                <Group>
                  <Spoiler
                    maxHeight={115}
                    showLabel="Read more"
                    hideLabel="Show less"
                    style={{
                      color: "#ffffff",
                      fontSize: ".9rem",
                      fontWeight: "normal",
                      textAlign: "justify",
                    }}
                  >
                    Bitcoin is a cryptocurrency launched in January 2009, where the first genesis block was mined on 9th January 2009. It is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.
                  </Spoiler>
                </Group>
                <div className="tvwphyt2-m">
                  <span className="tvwphyt-2-m-spanl" style={{ border: 0 }}>Token address</span>
                  <span className="tvwphyt-2-m-spanr" style={{ color: "white" }}>0x0000...1010</span>
                </div>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#282A2F", margin: "12px 0" }}></div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "Montreal",
                    letterSpacing: "0.1rem",
                  }}
                >
                  Market Stats
                </span>
                <div className="tvwphyt2-m">
                  <span className="tvwphyt-2-m-spanl" style={{ border: 0 }}>Market Cap</span>
                  <span className="tvwphyt-2-m-spanr" style={{ color: "white" }}>$4,842,278,239.00</span>
                </div>
                <div className="tvwphyt2-m">
                  <span className="tvwphyt-2-m-spanl" style={{ border: 0 }}>All Time Hight</span>
                  <span className="tvwphyt-2-m-spanr" style={{ color: "white" }}>$2.92</span>
                </div>
                <div className="tvwphyt2-m">
                  <span className="tvwphyt-2-m-spanl" style={{ border: 0 }}>All Time Low</span>
                  <span className="tvwphyt-2-m-spanr" style={{ color: "white" }}>$0.00</span>
                </div>
                <div className="tvwphyt2-m">
                  <span className="tvwphyt-2-m-spanl" style={{ border: 0 }}>Fully Diluted Value</span>
                  <span className="tvwphyt-2-m-spanr" style={{ color: "white" }}>$5,206,861,073.00</span>
                </div>
                <div className="tvwphyt2-m">
                  <span className="tvwphyt-2-m-spanl" style={{ border: 0 }}>Total Volume Locked</span>
                  <span className="tvwphyt-2-m-spanr" style={{ color: "white" }}>$185,038,398.00</span>
                </div>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#282A2F", margin: "12px 0" }}></div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "Montreal",
                    letterSpacing: "0.1rem",
                  }}
                >
                  Resources
                </span>
                <Anchor style={{ color: "var(--mantine-color-anchor)", fontSize: "0.9rem" }} >https://bitcoin.org/</Anchor>
                <Anchor style={{ color: "var(--mantine-color-anchor)", fontSize: "0.9rem" }} >https://blog.bitcoin.com/</Anchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Derivex;
