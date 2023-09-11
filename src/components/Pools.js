import React, { useState } from "react";
import "../styles/pools.css";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SettingsIcon from "@mui/icons-material/Settings";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import totalAPRIcon from "../assets/totalAPRIcon.svg";
import netReturnIcon from "../assets/netReturnIcon.svg";
import volumeIcon from "../assets/volumeIcon.svg";
import feesIcon from "../assets/feesIcon.svg";
import addLiquidityIcon from "../assets/addLiquidityIcon.svg";
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'

const Pools = () => {
  const [openIt, setOpenIt] = React.useState(false);
  const [Simadvmodal, setSimadvmodal] = React.useState(true);
  const [tabActive, setTabActive] = React.useState(false);
  const [idActive, setIdActive] = React.useState(0);
  const handleOpen = () => setOpenIt(true);
  const handleClose = () => setOpenIt(false);
  const { address, connector: activeConnector, isConnected } = useAccount()
  const { open, close } = useWeb3Modal();
  const [value, setValue] = React.useState(1);

  const theme = createTheme();


  let truncatedAddress;

  if (address) {
    truncatedAddress =
      address.substring(0, 7);
  }

  const marks = [
    {
      value: 0,
      label: "29245.6",
    },
    {
      value: 33.3,
      label: "23423.5",
    },
    {
      value: 66.6,
      label: "17562.3",
    },
    {
      value: 100,
      label: "11749.0",
    },
  ];
  const upDownMarks = [
    {
      value: 0,
      label: "Current",
    },
    {
      value: 33.3,
      label: "+20%",
    },
    {
      value: 66.6,
      label: "+40%",
    },
    {
      value: 100,
      label: "+60%",
    },
  ];
  const downUpMarks = [
    {
      value: 100,
      label: "Current",
    },
    {
      value: 66.6,
      label: "-20%",
    },
    {
      value: 33.3,
      label: "-40%",
    },
    {
      value: 0,
      label: "-60%",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    // console.log('newValue',newValue)
    // if(idActive === 1){
    //   setValue(80);
    // }
    // else{
    //   setValue(20);
    // }
  };

  return (
    <>
      <span></span>
      <div className="lol" id="derivexlol">
        <div className="poolmaincont">
          <div className="poolmch">
            <div className="poolmch1">
              <div
                className="poolmch11"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className="pmch1l">
                  <img
                    src="	https://app.perp.com/assets/coins/btc.svg"
                    alt="BTC"
                  />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="pmch1c">
                  <span className="pmch1c1">BTC</span>
                  <span className="pmch1c2">Bitcoin</span>
                </div>
              </div>
            </div>
            <div className="pmch1s"></div>
          </div>
          <div className="poolinfoliq">
            <div className="poolinfo">
              <div className="infocont">
                <div className="infocont1">Pool Party</div>
                <div className="picont11">
                  <span>
                    Earn PERP+OP by providing liquidity! The more trading fees
                    you earn proportionately in a week, the higher % you can
                    claim from the liquidity mining rewards.
                  </span>
                </div>
                <div className="infocont2">
                  <button>Claim Here</button>
                </div>
              </div>
              <p>Pool Info</p>
              <div className="picont1">
                <div className="picont11">
                  <span>Total Apr</span>
                </div>
                <div className="picont12">
                  <span>0.0% - 349.7%</span>
                </div>
              </div>
              <hr></hr>
              <div className="picont2">
                <div className="picont21">
                  <div className="picont11">
                    <span>Bas Apr</span>
                  </div>
                  <div className="picont211">
                    <span>0.0% - 48.7%</span>
                  </div>
                </div>
                <div className="picont22">
                  <div className="picont11">
                    <span>Rewards Apr</span>
                  </div>
                  <div className="picont211">
                    <span>0.0% - 301.0%</span>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="picont3">
                <div className="picont31">
                  <div className="picont311">
                    <div className="picont11">
                      <span>Market Price</span>
                    </div>
                    <div className="picont3111">
                      <span>$29,353.6</span>
                    </div>
                  </div>
                  <div className="picont312">
                    <div className="picont11">
                      <span>TVL</span>
                    </div>
                    <div className="picont3111">
                      <span>$1.9M</span>
                    </div>
                  </div>
                </div>
                <div className="picont32">
                  <div className="picont311">
                    <div className="picont11">
                      <span>Volume (24h)</span>
                    </div>
                    <div className="picont3111">
                      <span>$888K</span>
                    </div>
                  </div>
                  <div className="picont312">
                    <div className="picont11">
                      <span>24h Fees</span>
                    </div>
                    <div className="picont3111">
                      <span>$888.1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="poolliq">
              <p>Provided Liquidity</p>

              <div className="picont2 plc2">
                <div className="picont21">
                  <div className="picont11">
                    <span>Total Apr</span>
                  </div>
                  <div className="picont3111">
                    <div>
                      {/* <OpacityOutlinedIcon
                        sx={{ color: "rgba(0,181,216,1)", fontSize: 30 }}
                      /> */}
                      <img className="poolIconClass" src={totalAPRIcon} alt={totalAPRIcon} />
                    </div>
                    <span>$29,353.6</span>
                  </div>
                  <div className="picont11">
                    <span>Bronze - Playing it safe.</span>
                  </div>
                </div>
                <div className="picont22">
                  <div className="picont11">
                    <span>Net Return</span>
                  </div>
                  <div className="picont3111">
                    <div>
                      {/* <OpacityOutlinedIcon
                        sx={{ color: "rgba(0,181,216,1)", fontSize: 30 }}
                      /> */}
                      <img className="poolIconClass" src={netReturnIcon} alt={netReturnIcon} />
                    </div>
                    &nbsp;<span>$29,353.6</span>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="picont3 plc3">
                <div className="picont31">
                  <div className="picont311">
                    <div className="picont11">
                      <span>Market Price</span>
                    </div>
                    <div className="picont3111">
                      <div>
                        <OpacityOutlinedIcon
                          sx={{ color: "rgba(0,181,216,1)", fontSize: 30 }}
                        />
                      </div>
                      &nbsp;<span>$29,353.6</span>
                    </div>
                  </div>
                  <div className="picont312">
                    <div className="picont11">
                      <span>TVL</span>
                    </div>
                    <div className="picont3111" style={{ color: "#3deca7" }}>
                      <span>-,---</span>
                    </div>
                    <div className="picont11">
                      <span>Bronze - Playing it safe.</span>
                    </div>
                  </div>
                </div>
                <div className="picont32">
                  <div className="picont311">
                    <div className="picont11">
                      <span>Volume (24h)</span>
                    </div>
                    <div className="picont3111">
                      <div>
                      <img className="poolIconClass" src={volumeIcon} alt={volumeIcon} />
                       
                      </div>
                      <span>$0.0</span>
                    </div>
                  </div>
                  <div className="picont312">
                    <div className="picont11">
                      <span>24h Fees</span>
                    </div>
                    <div className="picont3111">
                      <div>
                      <img className="poolIconClass" src={feesIcon} alt={feesIcon} />
                      </div>
                      &nbsp;<span>$--</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="plc4">
                <p>
                  Liquidity Positions{" "}
                  <span style={{ color: "rgba(255, 255, 255, 0.80)" }}>
                    (0/3)
                  </span>
                </p>
                <div className="addLiquidityButtonHolder  cursor" onClick={handleOpen}>
                  <img style={{height:'24px', marginRight:'6px'}} src={addLiquidityIcon} alt={addLiquidityIcon} />
                  <span style={{color:'#26282A', fontWeight:'500'}}>
                    Add Liquidity
                  </span> 
                  </div>
              </div>
              {Simadvmodal ? (
                <Modal
                  open={openIt}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",

                        height: 533,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 8,
                        backgroundColor: "#26282A",
                        padding: "1.7em",
                        overflow: "scroll",

                        [theme.breakpoints.down("sm")]: {
                          width: "90%",
                          padding: "20px",
                        },
                      }}
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Add Liquidity
                      </Typography>
                      <IconButton
                        onClick={() => {
                          handleClose();
                        }}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          color: "white",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>

                      <div className="modalsimple">
                        <div className="main">
                          <div className="sabtns">
                            <div style={{marginRight:'16px'}}
                              className={`cursor ${!tabActive && "selectedLiquidity"}`}
                              onClick={() => {
                                setSimadvmodal(true);setTabActive(false)
                              }}
                            >
                              <span style={{fontWeight:'500'}}>Simple</span>
                            </div>
                            
                            <div
                              className={`cursor ${tabActive && "selectedLiquidity"}`}
                              onClick={() => {
                                setSimadvmodal(false);setTabActive(true)
                              }}
                            >
                              <span style={{fontWeight:'500'}}>Advanced</span>
                            </div>
                          </div>

                          <div className="predict">
                            <div className="pt">
                              I think the price of BTC will...
                            </div>
                            <div className="pi">
                              <div className="piupdn cursor" onClick={() => setIdActive(0)}> Go down then up</div>
                              <div
                                className="piupdn cursor"
                                style={{ backgroundColor: "#62232c" }}
                                onClick={() => setIdActive(1)}
                              >
                                Go up then down
                              </div>
                            </div>
                          </div>

                          <hr style={{ marginTop: 0 }}></hr>

                          <div className="pricerange">
                            <div className="pt">
                              Set Price Range
                              <p>Narrow (20% below the current price)</p>
                            </div>
                            <Box
                              sx={{
                                width: "100%",
                                padding: "0px 40px",
                                [theme.breakpoints.down("sm")]: {
                                  padding: "10px 10px",
                                  ".MuiSlider-markLabel": {
                                    fontSize: "13px",
                                  },
                                },
                              }}
                            >
                              <Slider
                                sx={{
                                  ".MuiSlider-markLabel": {
                                    color: "white",
                                    textAlign: "left",
                                  },
                                  [theme.breakpoints.down("sm")]: {
                                    padding: "10px 0px",
                                    width: "100%",
                                  },
                                }}
                                track={idActive === 1 ? "" : 'inverted'}
                                aria-label="Restricted values"
                                defaultValue={idActive === 1 ? 80 : 20}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange}
                                step={null}
                                marks={idActive === 1 ? upDownMarks : downUpMarks}
                                value={typeof value === 'number' ? value : 0}
                              />
                            </Box>
                            <div className="at" style={{ marginTop: "5px" }}>
                              <span className="smallText" 
                              // style={{ fontSize: "0.75rem " }}
                              >
                                I speculate the price will go down as much as
                                40% below $29,245.6. But ultimately it will go
                                above $29,245.6.
                              </span>
                            </div>{" "}
                          </div>
                          <hr></hr>
                          <div className="plab">
                            <div className="pt">Provide Liquidity</div>
                            <div className="pti">
                              <div className="amt">
                                <span style={{ fontSize: "0.9rem" }}>
                                  Amount
                                </span>
                                <div className="amtm">
                                  <div className="amtm1" style={{border:'1px solid #383737', padding:'0 8px'}}>
                                    <div className="amtm1lo"></div>
                                    <div className="amtm1in">
                                      <input
                                        style={{ color: "white" }}
                                        type="text"
                                        placeholder="USD"
                                      ></input>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="amdt">
                                <span
                                className="smallText"
                                  style={{
                                    fontSize: "0.9rem",
                                    paddingLeft: "10px",
                                  }}
                                >
                                  Buying Power ≈ $0.0
                                </span>
                                <div className="amtm" id="am1">
                                  <div
                                    className="amtm1"
                                    style={{ backgroundColor: "#2F3032" }}
                                  >
                                    <div className="amtm1in">
                                      <span style={{ paddingLeft: 15, color:'#82828F', fontSize:'16px', fontWeight:'500' }}>
                                        0.00x
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="summary">
                          <div className="scco">
                            <div className="pt">Easy LP</div>

                            <div className="pt" style={{ marginTop: 10 }}>
                              <p className="smallText">
                                If the price moves as you expected, you will
                                earn transaction fees and Pool Party rewards
                                without impermanent loss.
                              </p>
                            </div>
                            <hr />
                            <div className="suma">
                              <div className="pt">Summary</div>
                              <div className="ptsd">
                                <div
                                  className="ptsd1"
                                  style={{ textAlign: "center" }}
                                >
                                  <div style={{ textAlign: "center" }}>
                                    <span
                                    className="smallText"
                                      style={{
                                      //   fontSize: "0.75rem",
                                        fontWeight: "500",
                                        // textAlign: "center",
                                      }}
                                    >
                                      Overall Risk
                                    </span>
                                  </div>
                                  <div style={{ textAlign: "center" }}>
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textAlign: "center",
                                      }}
                                    >
                                      --
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="ptsd1"
                                  style={{ textAlign: "center" }}
                                >
                                  <div>
                                    <span
                                    className="smallText"
                                      style={{
                                      //   fontSize: "0.75rem",
                                        fontWeight: "500",
                                      //   textAlign: "center",
                                      }}
                                    >
                                      Est. Weekly Fees
                                    </span>
                                  </div>
                                  <div style={{ textAlign: "center" }}>
                                    {" "}
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        textAlign: "center",
                                      }}
                                    >
                                      $--
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="ptsd1"
                                  style={{ textAlign: "center" }}
                                >
                                  <div>
                                    <span
                                    className="smallText"
                                      style={{
                                      //   fontSize: "0.75rem",
                                        fontWeight: "500",
                                      //   textAlign: "center",
                                      }}
                                    >
                                      Est. Weekly Rewards
                                    </span>
                                  </div>
                                  <div style={{ textAlign: "center" }}>
                                    {" "}
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        textAlign: "center",
                                      }}
                                    >
                                      $--
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="scobtn">
                            <hr style={{ marginTop: 0 }} />
                            <div className="hrc">
                              <div className="scobtnli">
                                <div className="plc4">
                                  <div className="addLiquidityButtonHolder cursor">
                                  <img style={{height:'24px', marginRight:'6px'}} src={addLiquidityIcon} alt={addLiquidityIcon} />
                                  <span style={{color:'#26282A', fontWeight:'500'}}>
                                    Add Liquidity
                                  </span> 
                                  </div>
                                </div>
                              </div>
                              <div className="scoset">
                                <SettingsIcon sx={{ color: "white" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </ThemeProvider>
                </Modal>
              ) : (
                // advanced
                <Modal
                  open={openIt}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: 533,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 8,
                        backgroundColor: "#26282A",
                        padding: "1.7em",
                        overflow: "scroll",
                        [theme.breakpoints.down("sm")]: {
                          width: "90%",
                          padding: "20px",
                        },
                      }}
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Add Liquidity
                      </Typography>
                      <IconButton
                        onClick={() => {
                          handleClose();
                        }}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          color: "white",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>

                      <div className="modalsimple">
                        <div className="main">
                        <div className="sabtns">
                            <div style={{marginRight:'16px'}}
                              className={`cursor ${!tabActive && "selectedLiquidity"}`}
                              onClick={() => {
                                setSimadvmodal(true);setTabActive(false)
                              }}
                            >
                              <span style={{fontWeight:'500'}}>Simple</span>
                            </div>
                            
                            <div
                              className={`cursor ${tabActive && "selectedLiquidity"}`}
                              onClick={() => {
                                setSimadvmodal(false);setTabActive(true)
                              }}
                            >
                              <span style={{fontWeight:'500'}}>Advanced</span>
                            </div>
                          </div>

                          <div className="predict">
                            <div className="pt">Set Price Range</div>
                            <div className="pt">
                              <p
                                style={{ fontSize: "0.75rem", fontWeight: 500 }}
                              >
                                Market Price: $29,323.6
                              </p>
                            </div>
                            <div className="pi pia">
                              <div className="piupdn pia1">
                                <div className="mbtnt">
                                  <div className="mbtn">
                                    <button>-</button>
                                  </div>
                                  <div className="mbtn-t">
                                    <span>Min</span>
                                  </div>
                                </div>
                                <div className="matxt">
                                  <input type="text" />
                                  <div className="mbtn">
                                    <button>+</button>
                                  </div>
                                </div>
                                <div className="abtnt"></div>
                              </div>
                              <div className="piupdn pia1">
                                <div className="mbtnt">
                                  <div className="mbtn">
                                    <button>-</button>
                                  </div>
                                  <div className="mbtn-t">
                                    <span>Max</span>
                                  </div>
                                </div>
                                <div className="matxt">
                                  <input type="text" />
                                  <div className="mbtn">
                                    <button>+</button>
                                  </div>
                                </div>
                                <div className="abtnt"></div>
                              </div>
                            </div>
                          </div>

                          <hr style={{ marginTop: 0 }}></hr>

                          <div className="pricerange">
                            <div className="pt">Provide Liquidity</div>
                            <div className="btcusdi">
                              <div className="abpr">
                                <div className="bua">
                                  <span>Amount</span>
                                </div>
                                <div className="bua">
                                  <span style={{ opacity: 0.7 }}>
                                    Buying Power ≈ $0.0
                                  </span>
                                </div>
                              </div>
                              <div className="bumain">
                                <div className="bumain1" style={{borderBottom: '2px solid rgb(51, 51, 51)'}}>
                                  <div className="bm1cont" style={{width:'15%', marginLeft:'9px'}}>
                                    {/* <div className="mbtn"> */}
                                    <div 
                                    className="amtm1lo" 
                                    style={{width:'28px', backgroundImage:'none'}}
                                    >
                                    <img style={{width:'24px'}} src="https://gains.trade//_next/static/media/btc.fdaa3ece.svg" alt="bitcoinImg" />
                                    </div>
                                    {/* </div> */}
                                    
                                    <div className="mbtn-t">
                                      <span>BTC</span>
                                    </div>
                                  </div>
                                  <input type="text" />
                                </div>
                                <div
                                  className="bumain1"
                                  style={{ border: "none" }}
                                >
                                  <div className="bm1cont" style={{width:'15%', marginLeft:'7px'}}>
                                    {/* <div className="mbtn"> */}
                                    <div className="amtm1lo" style={{height:'28px', width:'28px', marginRight:'2px'}}></div>
                                    {/* </div> */}
                                    
                                    <div className="mbtn-t">
                                      <span>USD</span>
                                    </div>
                                  </div>
                                  <input type="text" />
                                </div>
                              </div>
                              <div
                                className="abpr"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <div className="bua">
                                  <span style={{ opacity: 0.7 }}>
                                    Total cost: $0.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="summary">
                          <div className="scco">
                            <div className="pt">Advanced Mode</div>

                            <div className="pt" style={{ marginTop: 10 }}>
                              <p style={{fontWeight:'400'}}>
                                Manually set price range and token allocation.
                              </p>
                            </div>
                          </div>

                          <div className="scobtn">
                            <hr
                              style={{ marginTop: 0 }}
                            />
                            <div className="hrc">
                              <div className="scobtnli">
                                <div className="plc4">
                                <div className="addLiquidityButtonHolder">
                                  <img style={{height:'24px', marginRight:'6px'}} src={addLiquidityIcon} alt={addLiquidityIcon} />
                                  <span style={{color:'#26282A', fontWeight:'500'}}>
                                    Add Liquidity
                                  </span> 
                                  </div>
                                </div>
                              </div>
                              <div className="scoset">
                                <SettingsIcon sx={{ color: "white" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </ThemeProvider>
                </Modal>
              )}

              <div className="plc5">
                <span>You can have up to 3 liquidity positions.</span>
              </div>
              <div style={{display:'flex', justifyContent:'center'}}>
              {isConnected ? <li className="webappconnected" style={{ fontFamily: 'Regular' }} onClick={() => open()} >
                    <span>0.10tMATIC</span>
                    <div className="wacd">

                      <span>{truncatedAddress}</span>

                      <img src={process.env.PUBLIC_URL + '/Media/pfp.jpeg'} alt={"Connected Wallet"} style={{
                        height: 27,
                        borderRadius: 30
                      }} />
                    </div>

                  </li> : <li className="webapp" style={{ fontFamily: 'Regular' }} onClick={() => open()} >

                    <div className="greytack">Connect Wallet&nbsp;<PowerSettingsNewOutlinedIcon fontSize="small" /></div>
                  </li>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pools;
