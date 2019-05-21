const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/config");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.post("/sendMoney", (req, res) => {
  res.send({
    message: "Your money was send",
    send: req.body
  });
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Index Page" });
});

// 404
app.use(function(req, res, next) {
  return res.status(404).json({ message: "Route" + req.url + " Not found." });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).json({ error: err });
});

app.listen(config.port, () => {
  console.log(`Server started on ${config.port}`);
});
