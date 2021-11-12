'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("AssetServiceLogs", {
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
    serviceDate: Sequelize.DATE,
    vendor: Sequelize.ENUM('CLOUD_DESIGNS', 'SELF'),
    expectedDeliveryDate: Sequelize.DATE,
    serviceDescription: {
      type: Sequelize.STRING(1234),
      allowNull: false
    },
    deliveryDate: Sequelize.DATE,
    deliveryDescription: {
      type: Sequelize.STRING(1234),
      allowNull: false
    },
    isFreeService: Sequelize.BOOLEAN,
    isWarrantyClaim: Sequelize.BOOLEAN,
    cost: Sequelize.DOUBLE,
    imageUrl: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    createdBy: Sequelize.BIGINT,
    updatedAt: Sequelize.DATE,
    updatedBy: Sequelize.BIGINT,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable("AssetServiceLogs");
  }
};
