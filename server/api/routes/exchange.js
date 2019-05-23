const express = require("express");
const router = express.Router();

router.post("/exchange", (req, res) => {
  const transaction = {
    senderNumber: req.body.senderNumber,
    amount: req.body.amount,
    recipient: req.body.recipient
  };
  res.status(200).json({
    message: "Transaction in Process",
    createdTransaction: transaction
  });
});

module.exports = router;
