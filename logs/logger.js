const path = require("path");
const bunyan = require("bunyan");

const level = process.env.NODE_LOGGING_LEVEL || "info";

const logger = bunyan.createLogger({
  name: "myapp",
  streams: [
    {
      level: level,
      stream: process.stdout
    },
    {
      level: level,
      path: path.resolve(__dirname, "../logs", "logs.log")
    }
  ]
});

module.exports = logger