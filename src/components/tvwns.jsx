import React from "react";

const tvwns = () => {
  return (
    <div className="tvwns">
      <div className="tvwnsh">
        <div className="tvwnshl">
          <button
            onClick={() => {
              setTohmenu(1);
            }}
          >
            Trades
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
            History
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
          <div className="tvwnshr">
            <span style={{ color: "#82828F" }}>Wallet not connected</span>{" "}
            &nbsp;&nbsp;{" "}
            <button
              onClick={() => {
                open();
              }}
            >
              Connect
            </button>
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
                          <th>Type</th> <td>{selectedRow.type}</td>
                        </tr>

                        <tr>
                          <th>Leverage</th> <td>{selectedRow.leverage}</td>
                        </tr>
                        <tr>
                          <th>Collateral</th> <td>{selectedRow.collateral}</td>
                        </tr>
                        <tr>
                          <th>Open Price</th> <td>{selectedRow.openPrice}</td>
                        </tr>
                        <tr>
                          <th>Price</th> <td>{selectedRow.price}</td>
                        </tr>
                        <tr>
                          <th>Liq/SL</th> <td>{selectedRow.liqSl}</td>
                        </tr>
                        <tr>
                          <th>Take Profit</th> <td>{selectedRow.takeProfit}</td>
                        </tr>
                        <tr>
                          <th>Net Pnl</th> <td>{selectedRow.netPnl}</td>
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
      <div className="tvwnshm">
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
      </div>
    </div>
  );
};

export default tvwns;
