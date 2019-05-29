const express = require("express");
const router = express.Router();
const { Transaction } = require("../../models");
const config = require("../../config/config");
const axios = require("axios");

// Exchange Endpoint
router.post("/exchange", async (req, res) => {
  const { senderPhone, amount, recipientPhone, fee } = req.body;

  await Transaction.create({
    senderPhone: senderPhone,
    recipientPhone: recipientPhone,
    amount: amount,
    fee: fee
  })
    .then(transaction => {
      let url = config.monetbil.url;

      let service = config.monetbil.service_key;
      let phonenumber = senderPhone;
      let _amount = amount + fee;
      let notify_url = null; //Todo provide by me using ngrok
      let requestData = {
        service: service,
        phonenumber: phonenumber,
        notify_url: notify_url,
        payment_ref: transaction.id,
        amount: _amount
      };

      axios
        .post(url, requestData)
        .then(response => {
          res.status(200).json({
            status: "pending",
            paymentUrl: {},
            data: transaction,
            instructions: response.data,
            error: {}
          });
        })
        .catch(error => {
          res.status(400).json({
            status: "failed",
            paymentUrl: {},
            data: {},
            instructions: {},
            error: error.response.data
          });
        });
    })
    .catch(error => {
      console.log(error);
    });
});

// Verify Endpoint
router.get("/verify", (req, res) => {
  const transactionId = req.params || req.body;

  //TODO Verify
  if (error) {
    res.status(400).json({
      error: error
    });
  } else {
    res.status(200).json();
  }
});

// Monetbill Endpoint

module.exports = router;
