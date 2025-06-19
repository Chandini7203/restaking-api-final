exports.getValidators = (req, res) => {
  // Temporary dummy response
  res.json([
    {
      operatorAddress: "0xABC123...",
      totalDelegatedStake: "1500 stETH",
      slashHistory: [
        { date: "2024-02-01", amount: "100 stETH", reason: "Downtime" }
      ],
      status: "active"
    }
  ]);
};
