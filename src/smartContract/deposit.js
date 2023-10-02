// import { Signer, ethers } from "ethers";
// import vaultABI from "../ABIs/vaultABI.json";
// import xusdABI from "../ABIs/xusdABI.json";

// const vaultAddress = "0xb7f8D01e8BFa3AeC25ab0CF6AACee6c95899Dca1";

// const xusdAddr = "0xA3C957f5119eF3304c69dBB61d878798B3F239D9";

// export const deposit = async (
//   amount: string,
//   userAddress: string,
//   signer: Signer
// ) => {
//   const vault = new ethers.Contract(vaultAddress, vaultABI, signer);
//   const XUSD = new ethers.Contract(xusdAddr, xusdABI, signer);
//   const value = ethers.utils.parseEther(amount);
//   const allowed = await XUSD.allowance(userAddress, vaultAddress);
//   if (allowed < value) {
//     try {
//       const approval = await XUSD.approve(vault, value);
//       approval.wait(1);
//     } catch (error) {
//       console.log("Approval failed");
//       return;
//     }
//   }

//   const txData = await vault.deposit(XUSD.address, value);
//   txData.wait();
//   console.log(
//     "Transaction Successful!",
//     "View on Polyscan:",
//     txData.transactionHash
//   );
// };
