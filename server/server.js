const http = require("http");
const config = require("./config/config");
const db = require("./models");
const app = require("./app");

const server = http.createServer(app);

db.sequelize.sync({ force: false }).then(() => {
  server.listen(config.port, () => {
    console.log();
    console.log(`Server started on ${config.port}`);
    console.log();
  });
});
