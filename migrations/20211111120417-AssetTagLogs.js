'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("AssetTagLogs", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      assetId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      employeeId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      issuedDate: Sequelize.DATE,
      issuedReason: Sequelize.STRING(1234),
      returnedDate: Sequelize.DATE,
      returnedReason: Sequelize.STRING(1234),
      comments: Sequelize.STRING(1234),
      createdAt: Sequelize.DATE,
      createdBy: Sequelize.BIGINT,
      updatedAt: Sequelize.DATE,
      updatedBy: Sequelize.BIGINT
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable("AssetTagLogs");
  }
};
