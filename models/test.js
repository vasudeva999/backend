const sequelize = require("sequelize");

module.exports = sequelize.define("test", {
    id: {
        type: sequelize.INTEGER,
        allowedNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content: sequelize.STRING(255)
});