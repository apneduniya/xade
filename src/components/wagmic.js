/*
    ***Args:*** 

        baseToken: BTCbaseToken.address,
        isBaseToQuote: false,
        isExactInput: true,
        amount: amountArg,
        oppositeAmountBound: 0,
        deadline: ethers.constants.MaxUint256,
        sqrtPriceLimitX96: 0,
        referralCode: ethers.constants.HashZero
  */
const { config: setOpenPositionLongConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: CLEARING_HOUSE_ADDRESS,
  abi: clearingHouseABI,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  functionName: "openPosition",
  args: [
    {
      baseToken: BTC_BASE_TOKEN_ADDRESS,
      isBaseToQuote: false,
      isExactInput: true,
      amount: 56,
      oppositeAmountBound: 0,
      deadline: ethers.constants.MaxUint256,
      sqrtPriceLimitX96: 0,
      referralCode: ethers.constants.HashZero,
    },
  ], // TODO: Change args from "56" to an amountArg variable
});

const { write: submitOpenPositionLong } = useContractWrite({
  ...setOpenPositionLongConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

/*
            ***Args:*** 
                baseToken: BTCbaseToken.address,
                isBaseToQuote: true,
                isExactInput: false,
                amount: amountArg,
                oppositeAmountBound: 0,
                deadline: ethers.constants.MaxUint256,
                sqrtPriceLimitX96: 0,
                referralCode: ethers.constants.HashZero
          */
const { config: setOpenPositionShortConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: CLEARING_HOUSE_ADDRESS,
  abi: clearingHouseABI,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  functionName: "openPosition",
  args: [
    {
      baseToken: BTC_BASE_TOKEN_ADDRESS,
      isBaseToQuote: true,
      isExactInput: false,
      amount: 56,
      oppositeAmountBound: 0,
      deadline: ethers.constants.MaxUint256,
      sqrtPriceLimitX96: 0,
      referralCode: ethers.constants.HashZero,
    },
  ], // TODO: Change args from "56" to an amountArg variable
});

const { write: submitOpenPositionShort } = useContractWrite({
  ...setOpenPositionShortConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

/*
            ***Args:*** 
        
            baseToken: BTCbaseToken.address,
            sqrtPriceLimitX96: 0,
            oppositeAmountBound: 0,
            deadline: ethers.constants.MaxUint256,
            referralCode: ethers.constants.HashZero
          */
const { config: setClosePositionConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: CLEARING_HOUSE_ADDRESS,
  abi: clearingHouseABI,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  functionName: "openPosition",
  args: [
    {
      baseToken: BTC_BASE_TOKEN_ADDRESS,
      sqrtPriceLimitX96: 0,
      oppositeAmountBound: 0,
      deadline: ethers.constants.MaxUint256,
      referralCode: ethers.constants.HashZero,
    },
  ], // TODO: Change args from "56" to an amountArg variable
});

const { write: submitClosePosition } = useContractWrite({
  ...setClosePositionConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

const {
  data: readAllowanceData,
  refetch: readAllowanceRefetch,
} = useContractRead({
  address: XUSD_ADDRESS,
  abi: xusdABI,
  functionName: "allowance",
  args: [address, VAULT_ADDRESS],
  cacheTime: 1000 * 60 * 60 * 24 * 3,
  staleTime: 1618,
  watch: true,
});

useEffect(() => {
  if (readAllowanceData) {
    setAllowance(ethers.BigNumber.from(readAllowanceData));
  }
}, [readAllowanceData, setAllowance]);

/*
            ***Args:*** 
        
            spender: VAULT_ADDRESS,
            amount: ethers.constants.MaxUint256
          */
const { config: setApproveConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: XUSD_ADDRESS,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  abi: xusdABI,
  functionName: "approve",
  args: [
    {
      spender: VAULT_ADDRESS,
      amount: ethers.constants.MaxUint256,
    },
  ],
});

const { write: submitApprove } = useContractWrite({
  ...setApproveConfig,
  onSettled(data, error) {
    if (error) {
      console.error("Settled error", error);
    } else {
      data
        ?.wait(2)
        .then(() => {
          readAllowanceRefetch();
        })
        .catch((error) => {
          console.error("Transaction error", error, data);
        });
    }
  },
});

/*
            ***Args:*** 
        
            token: XUSD Address,
            amount
          */
const { config: setDepositConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: VAULT_ADDRESS,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  abi: vaultABI,
  functionName: "deposit",
  args: [
    {
      token: XUSD_ADDRESS,
      amount: ethers.utils.parseEther(amountDeposit || "0"),
    },
  ],
});

const { write: submitDeposit } = useContractWrite({
  ...setDepositConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

/*
            ***Args:*** 
        
            token: XUSD Address,
            amount
          */

const { config: setWithdrawConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: VAULT_ADDRESS,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  abi: vaultABI,
  functionName: "withdraw",
  args: [
    {
      token: XUSD_ADDRESS,
      address: ethers.utils.parseEther(amountWithdraw || "0"),
    },
  ],
});

const { write: submitWithdraw } = useContractWrite({
  ...setWithdrawConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

/*
            ***Args:*** 
        
              baseToken: BTCbaseToken.address,
              base: baseAmount,
              quote: quoteAmount,
              lowerTick: lowerTickValue,
              upperTick: upperTickValue,
              minBase: 0,
              minQuote: 0,
              useTakerBalance: false,
              deadline: ethers.constants.MaxUint256,
          */

const { config: setAddLiquidityConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: CLEARING_HOUSE_ADDRESS,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  abi: clearingHouseABI,
  functionName: "addLiquidity",
  args: [{
    baseToken:  BTC_BASE_TOKEN_ADDRESS,
    base:  baseAmount,
    quote: quoteAmount,
    lowerTick: lowerTickValue,
    upperTick: upperTickValue,
    minBase: 0,
    minQuote: 0,
    useTakerBalance:false,
    deadline: ethers.constants.MaxUint256,}
  ],
});

const { write: submitAddLiquidity } = useContractWrite({
  ...setAddLiquidityConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

/*
            ***Args:*** 
        
              baseToken: BTCbaseToken.address,
              lowerTick: lowerTickArg,
              upperTick: upperTickArg,
              liquidity: 0,
              minBase: 0,
              minQuote: 0,
              deadline: ethers.constants.MaxUint256,
          */

const { config: setRemoveLiquidityConfig } = usePrepareContractWrite({
  enabled: !!isConnected,
  address: CLEARING_HOUSE_ADDRESS,
  // overrides: {
  //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
  // },
  abi: clearingHouseABI,
  functionName: "removeLiquidity",
  args: [{
    baseToken: BTC_BASE_TOKEN_ADDRESS,
    lowerTick: lowerTickValue,
    upperTick: upperTickValue,
    liquidity: 0,
    minBase: 0,
    minQuote:0,
    deadline: ethers.constants.MaxUint256,}
  ],
});

const { write: submitRemoveLiquidity } = useContractWrite({
  ...setRemoveLiquidityConfig,
  async onSuccess(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
  async onError(data) {
    // You can add Snackbar notifications such as from https://notistack.com/
  },
});

const deposit = () => {
  if (allowance.lt(ethers.utils.parseEther(amountDeposit || "0"))) {
    submitApprove?.();
  } else {
    submitDeposit?.();
  }
};

const withdraw = () => {
  submitWithdraw?.();
};

const getBaseLog = (x, y) => {
  return Math.log(y) / Math.log(x);
};

const priceToTick = (price, tickSpacing) => {
  const tick = getBaseLog(1.0001, price);
  return Math.round(tick / tickSpacing) * tickSpacing;
};
