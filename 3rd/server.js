const express = require('express');

const bodyParser = require('body-parser');

const router = require("./routes/index.routes");

const app = express();

app.use(bodyParser.json()); // Middleware

app.use("/api/v1", router);

app.listen(8090, function () {
  console.log("My app is working at PORT-", 8090);
});