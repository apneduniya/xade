// import { ethers } from "ethers";

// import clearingHouseABI from "../constants/abis/clearingHouseABI.json";
// import baseTokenABI from "../constants/abis/baseTokenABI.json";
// import quoteTokenABI from "../constants/abis/quoteTokenABI.json";
// import vaultABI from "../constants/abis/vaultABI.json";
// import xusdABI from "../constants/abis/xusdABI.json";

// export default function derivex() {
//   // Modify to suit whatever wallet provider is being used
//   function connectWallet() {
//     if (window.ethereum) {
//       window.ethereum
//         .request({ method: "eth_requestAccounts" })
//         .then((res: string[]) => accountChangeHandler(res[0]));
//     } else {
//       alert("install metamask extension!!");
//     }
//   }

//   const accountChangeHandler = (account: string) => {
//     if (account != String(userAddress)) {
//     }
//   };

//   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//   const signer = provider.getSigner();
//   const userAddress = signer.getAddress();

//   const clearingHouseAddress = "0x03E587B6b7eEa879353Ae8DDa979E91d43f331EB";
//   const clearingHouse = new ethers.Contract(
//     clearingHouseAddress,
//     clearingHouseABI,
//     signer
//   );

//   const BTCbaseTokenAddress = "0x16c319B10Da032B0209eD8Ea38AA253912AE1B14";
//   const BTCbaseToken = new ethers.Contract(
//     BTCbaseTokenAddress,
//     baseTokenABI,
//     signer
//   );

//   const quoteTokenAddress = "0x333008aC2594686D527825b93399BCaf2D9DDf1F";
//   const quoteToken = new ethers.Contract(
//     quoteTokenAddress,
//     quoteTokenABI,
//     signer
//   );

//   const vaultAddress = "0xb7f8D01e8BFa3AeC25ab0CF6AACee6c95899Dca1";
//   const vault = new ethers.Contract(vaultAddress, vaultABI, signer);

//   const xusdAddr = "0xA3C957f5119eF3304c69dBB61d878798B3F239D9";
//   const XUSD = new ethers.Contract(xusdAddr, xusdABI, signer);

//   function vaultOps() {
//     const deposit = async (amount: string) => {
//       const value = ethers.utils.parseEther(amount);
//       const allowed = await XUSD.allowance(userAddress, vaultAddress);
//       if (allowed < value) {
//         try {
//           const approval = await XUSD.approve(vault, value);
//           approval.wait(1);
//         } catch (error) {
//           console.log("Approval failed");
//           return;
//         }
//       }

//       try {
//         const txData = await vault.callStatic.deposit(XUSD.address, value);
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await vault.deposit(XUSD.address, value);
//       txData.wait();
//       console.log(
//         "Transaction Successful!",
//         "View on Polyscan:",
//         txData.transactionHash
//       );
//     };

//     const withdraw = async (amount: string) => {
//       const value = ethers.utils.parseEther(amount);
//       try {
//         const txData = await vault.callStatic.withdraw(XUSD.address, value);
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await vault.withdraw(XUSD.address, value);
//       txData.wait();
//       console.log(
//         "Transaction Successful!",
//         "View on Polyscan:",
//         txData.transactionHash
//       );
//     };
//     return { withdraw, deposit };
//   }

//   function liquidityManagement() {
//     function getBaseLog(x: number, y: number) {
//       return Math.log(y) / Math.log(x);
//     }

//     function priceToTick(price: number, tickSpacing: number): number {
//       const tick = getBaseLog(1.0001, price);
//       return Math.round(tick / tickSpacing) * tickSpacing;
//     }

//     const addLiquidity = async (
//       baseTokenAmount: string,
//       quoteTokenAmount: string,
//       lowerPriceBoundArg: string,
//       upperPriceBoundArg: string
//     ) => {
//       const baseAmount = ethers.utils.parseUnits(
//         baseTokenAmount,
//         await BTCbaseToken.decimals()
//       );
//       const quoteAmount = ethers.utils.parseUnits(
//         quoteTokenAmount,
//         await quoteToken.decimals()
//       );

//       const lowerPriceBound = ethers.utils.parseUnits(
//         lowerPriceBoundArg,
//         await BTCbaseToken.decimals()
//       );
//       const upperPriceBound = ethers.utils.parseUnits(
//         upperPriceBoundArg,
//         await BTCbaseToken.decimals()
//       );

//       const lowerTickValue = priceToTick(Number(lowerPriceBound), 60);
//       const upperTickValue = priceToTick(Number(upperPriceBound), 60);

//       try {
//         const txData = await clearingHouse.callStatic.addLiquidity({
//           baseToken: BTCbaseToken.address,
//           base: baseAmount,
//           quote: quoteAmount,
//           lowerTick: lowerTickValue,
//           upperTick: upperTickValue,
//           minBase: 0,
//           minQuote: 0,
//           useTakerBalance: false,
//           deadline: ethers.constants.MaxUint256,
//         });
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await clearingHouse.addLiquidity({
//         baseToken: BTCbaseToken.address,
//         base: baseAmount,
//         quote: quoteAmount,
//         lowerTick: lowerTickValue,
//         upperTick: upperTickValue,
//         minBase: 0,
//         minQuote: 0,
//         useTakerBalance: false,
//         deadline: ethers.constants.MaxUint256,
//       });
//       txData.wait();
//       console.log(
//         "Transaction Successful!",
//         "View on Polyscan:",
//         txData.transactionHash
//       );
//     };

//     const removeLiquidity = async (
//       lowerTickArg: number,
//       upperTickArg: number
//     ) => {
//       try {
//         const txData = await clearingHouse.callStatic.removeLiquidity({
//           baseToken: BTCbaseToken.address,
//           lowerTick: lowerTickArg,
//           upperTick: upperTickArg,
//           liquidity: 0,
//           minBase: 0,
//           minQuote: 0,
//           deadline: ethers.constants.MaxUint256,
//         });
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await clearingHouse.callStatic.removeLiquidity({
//         baseToken: BTCbaseToken.address,
//         lowerTick: lowerTickArg,
//         upperTick: upperTickArg,
//         liquidity: 0,
//         minBase: 0,
//         minQuote: 0,
//         deadline: ethers.constants.MaxUint256,
//       });
//       txData.wait();
//       console.log(
//         "Transaction Successful!",
//         "View on Polyscan:",
//         txData.transactionHash
//       );
//     };
//     return { removeLiquidity, addLiquidity };
//   }

//   async function positionManagement() {
//     const openLongPosition = async (amountParam: number, leverage: number) => {
//       if (leverage > 10) {
//         return;
//       }
//       const amountArg = amountParam * leverage;
//       try {
//         const txData = await clearingHouse.callStatic.OpenPosition({
//           baseToken: BTCbaseToken.address,
//           isBaseToQuote: false,
//           isExactInput: true,
//           amount: amountArg,
//           oppositeAmountBound: 0,
//           deadline: ethers.constants.MaxUint256,
//           sqrtPriceLimitX96: 0,
//           referralCode: ethers.constants.HashZero,
//         });
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await clearingHouse.OpenPosition({
//         baseToken: BTCbaseToken.address,
//         isBaseToQuote: false,
//         isExactInput: true,
//         amount: amountArg,
//         oppositeAmountBound: 0,
//         deadline: ethers.constants.MaxUint256,
//         sqrtPriceLimitX96: 0,
//         referralCode: ethers.constants.HashZero,
//       });
//       txData.wait();
//       console.log(
//         "Transaction Successful! View on Polyscan:",
//         txData.transactionHash
//       );
//     };

//     const openShortPosition = async (amountParam: number, leverage: number) => {
//       if (leverage > 10) {
//         return;
//       }
//       const amountArg = amountParam * leverage;
//       try {
//         const txData = await clearingHouse.callStatic.OpenPosition({
//           baseToken: BTCbaseToken.address,
//           isBaseToQuote: true,
//           isExactInput: false,
//           amount: amountArg,
//           oppositeAmountBound: 0,
//           deadline: ethers.constants.MaxUint256,
//           sqrtPriceLimitX96: 0,
//           referralCode: ethers.constants.HashZero,
//         });
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await clearingHouse.OpenPosition({
//         baseToken: BTCbaseToken.address,
//         isBaseToQuote: true,
//         isExactInput: false,
//         amount: amountArg,
//         oppositeAmountBound: 0,
//         deadline: ethers.constants.MaxUint256,
//         sqrtPriceLimitX96: 0,
//         referralCode: ethers.constants.HashZero,
//       });
//       txData.wait();
//       console.log(
//         "Transaction Successful! View on Polyscan:",
//         txData.transactionHash
//       );
//     };

//     const closePosition = async () => {
//       try {
//         const txData = await clearingHouse.callStatic.closePosition({
//           baseToken: BTCbaseToken.address,
//           sqrtPriceLimitX96: 0,
//           oppositeAmountBound: 0,
//           deadline: ethers.constants.MaxUint256,
//           referralCode: ethers.constants.HashZero,
//         });
//         txData.wait();
//       } catch (error) {
//         console.log("Transaction will fail with:", error.reason);
//       }

//       const txData = await clearingHouse.closePosition({
//         baseToken: BTCbaseToken.address,
//         sqrtPriceLimitX96: 0,
//         oppositeAmountBound: 0,
//         deadline: ethers.constants.MaxUint256,
//         referralCode: ethers.constants.HashZero,
//       });
//       txData.wait();
//       console.log(
//         "Transaction Successful! View on Polyscan:",
//         txData.transactionHash
//       );
//     };
//     return { openLongPosition, openShortPosition, closePosition };
//   }
//   return { connectWallet, vaultOps, positionManagement, liquidityManagement };
// }
