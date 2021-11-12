'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("AssetHistory", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      assetId: Sequelize.BIGINT,
      specification: Sequelize.STRING(1234),
      leaseStartDate: Sequelize.DATE,
      leaseEndDate: Sequelize.DATE,
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isNew: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isActive: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      createdBy: Sequelize.BIGINT
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable("AssetHistory");
  }
};
