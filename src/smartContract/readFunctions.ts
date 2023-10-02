// import ethers from "ethers";
// import acctBalABI from "./ABIs/acctBalABI.json";
// import baseTokenABI from "./ABIs/baseTokenABI.json";
// import clearingHouseABI from "./ABIs/clearingHouseABI.json";
// import orderBookABI from "./ABIs/orderBookABI.json";
// import vaultABI from "./ABIs/vaultABI.json";

// const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// const signer = provider.getSigner();
// const userAddress = signer.getAddress();

// const orderBookAddress = "0xa9880EC9c46A63878E10356399cc5E121A309F41";
// const orderBook = new ethers.Contract(orderBookAddress, orderBookABI, signer);

// const clearingHouseAddress = "0x03E587B6b7eEa879353Ae8DDa979E91d43f331EB";
// const clearingHouse = new ethers.Contract(
//   clearingHouseAddress,
//   clearingHouseABI,
//   signer
// );

// const BTCbaseTokenAddress = "0x16c319B10Da032B0209eD8Ea38AA253912AE1B14";
// const BTCbaseToken = new ethers.Contract(
//   BTCbaseTokenAddress,
//   baseTokenABI,
//   signer
// );

// const acctBalAddress = "0x9611512bEeBfc0c33dcA1AD5268e1fB900DB5E14";
// const accountBalance = new ethers.Contract(acctBalAddress, acctBalABI, signer);

// const vaultAddress = "0xb7f8D01e8BFa3AeC25ab0CF6AACee6c95899Dca1";
// const vault = new ethers.Contract(vaultAddress, vaultABI, signer);

// export default function readFunctions() {
//   const markPrice = async (baseToken: string): Promise<number> => {
//     let price = await accountBalance.getMarkPrice(baseToken);
//     price = ethers.utils.parseEther(price);
//     console.log(price);
//     return price;
//   };

//   function tickToPrice(tick: number): number {
//     const revLog = tick * Math.log(1.0001);
//     return 10 ** revLog;
//   }

//   const displayLiquidityInfo = async () => {
//     const hasOrder = await orderBook.hasOrder(userAddress, [
//       BTCbaseToken.address,
//     ]);

//     if (hasOrder) {
//       const orderIds = await orderBook.getOpenOrderIds(
//         userAddress,
//         BTCbaseToken.address
//       );

//       for (let i: number; i < orderIds.length; i++) {
//         const order = await orderBook.getOrderById(orderIds[i]);
//         const liquidity = order.liquidity;
//         const lowerTick = order.lowerTick;
//         const upperTick = order.upperTick;
//         const lowerPriceBound = tickToPrice(lowerTick);
//         const upperPriceBound = tickToPrice(upperTick);
//         const accumulatedFeesx128 = order.lastFeeGrowthInsideX128; // Convert to standard
//         const baseTokenDebt = order.baseDebt;
//         const quoteTokenDebt = order.quoteDebt;
//         // Update the following to the front-end instead of logging
//         console.log(
//           liquidity,
//           lowerTick,
//           upperTick,
//           lowerPriceBound,
//           upperPriceBound,
//           accumulatedFeesx128,
//           baseTokenDebt,
//           quoteTokenDebt
//         );
//       }
//     } else {
//       console.log("You have no liquidity positions yet");
//     }
//   };

//   const displayPositionInfo = async () => {
//     const openNotional = accountBalance.getTakerOpenNotional(
//       userAddress,
//       BTCbaseToken.address
//     );
//     if (openNotional != 0) {
//       const positionSize = accountBalance.getTakerPositionSize(
//         userAddress,
//         BTCbaseToken.address
//       );

//       const positionValue = accountBalance.getTotalPositionValue(
//         userAddress,
//         BTCbaseToken.address
//       );

//       const baseTokenAmount = accountBalance.getBase(
//         userAddress,
//         BTCbaseToken.address
//       );

//       const quoteTokenAmount = accountBalance.getQuote(
//         userAddress,
//         BTCbaseToken.address
//       );

//       const entryPrice;

//       const [owedRealizedPnl, unrealizedPnl] =
//         accountBalance.getPnlAndPendingFee(userAddress);

//       Promise.all([
//         positionSize,
//         positionValue,
//         baseTokenAmount,
//         quoteTokenAmount,
//         openNotional,
//         [owedRealizedPnl, unrealizedPnl],
//       ]);

//       return {
//         positionSize,
//         positionValue,
//         baseTokenAmount,
//         quoteTokenAmount,
//         openNotional,
//         owedRealizedPnl,
//         unrealizedPnl,
//       };
//     }
//   };

//   // User's total account value
//   let accountValue = async (user: string): Promise<number> => {
//     let acctValue = await clearingHouse.getAccountValue(user);
//     acctValue = ethers.utils.formatEther(acctValue);
//     console.log(acctValue);
//     return acctValue;
//   };

//   const displayCollateralInfo = async () => {
//     // Maintenance margin ratio for liquidation
//     const maintenanceMarginRatio = vault.getCollateralMmRatio();

//     // Margin Requirement For Collateral Liquidation
//     const marginRequirementForLiquidation =
//       vault.getMarginRequirementForCollateralLiquidation(userAddress);

//     // Current Value of user's Settlement token (XUSD value)
//     const SettlementTokenValue = vault.getSettlementTokenValue(userAddress);

//     // Get user's free collateral
//     const freeCollateral = vault.getFreeCollateralByToken(
//       await vault.getSettlementToken()
//     );

//     Promise.all([
//       maintenanceMarginRatio,
//       marginRequirementForLiquidation,
//       SettlementTokenValue,
//       freeCollateral,
//     ]);

//     return {
//       maintenanceMarginRatio,
//       marginRequirementForLiquidation,
//       SettlementTokenValue,
//       freeCollateral,
//     };
//   };

//   return {
//     displayCollateralInfo,
//     displayLiquidityInfo,
//     displayPositionInfo,
//     accountValue,
//     markPrice,
//   };
// }
