exports.getRewards = (req, res) => {
  const { address } = req.params;
  res.json({
    address,
    totalRewards: "200 stETH",
    breakdown: [
      { validator: "0xVALIDATOR1...", amount: "120 stETH" },
      { validator: "0xVALIDATOR2...", amount: "80 stETH" }
    ]
  });
};
