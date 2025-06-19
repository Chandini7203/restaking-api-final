exports.getRestakers = (req, res) => {
  res.json([
    {
      userAddress: "0xUSER1...",
      amountRestaked: "500 stETH",
      targetOperator: "0xVALIDATOR1..."
    }
  ]);
};
