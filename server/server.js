const express = require("express");
const cors = require("cors");
require("dotenv").config();
const logger = require("../logs/logger");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/healthCheck", require("./server-routing"));

app.listen(process.env.PORT, () => {
  // logger.info(`Server Running on http://localhost:${process.env.PORT}`)
  // console.log(`Server Running on http://localhost:${process.env.PORT}`);
});
