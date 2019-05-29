module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_NAME || "easypay",
    user: process.env.DB_USER || "raymond",
    password: process.env.DB_PASS || "12345",
    options: {
      host: process.env.HOST || "localhost",
      dialect: process.env.DIALECT || "postgres",
      supportBigNumbers: true
    }
  },
  monetbil: {
    url: "https://api.monetbil.com/payment/v1/placePayment",
    service_key: "cMTxmycxNXL8mGHjFfjmuArboXKXA01l",
    service_secret:
      "REIxBASRTrkOdNEfYnlXSnfAn1dWcWmHKQ0gAieO9jHFdiLN5Vex5fL6JFk8VHsK"
  }
};
