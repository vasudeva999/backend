const Sequelize = require("sequelize");
const config = require("../config/config.json").development;
const logger = require("../logs/logger")

const sequelize = new Sequelize(
    config.database,
    config.username, 
    config.password,
    {
        "host": config.host,
        "dialect": config.dialect, 
        "operatorsAliases": config.operatorsAliases
    }
);

sequelize.authenticate().then(() => {
    // logger.info("Connected to database!");
    console.log("Connected to database!");
})

module.exports = sequelize;
global.sequelize = sequelize
