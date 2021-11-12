'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Asset", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isActive: Sequelize.BOOLEAN,
    specification: Sequelize.STRING(1234),
    uniqueIdentifier: Sequelize.STRING,
    vendor: {
      type: Sequelize.ENUM('CLOUD_DESIGNS', 'SELF'),
      allowNull: false
    },
    purchaseDate: Sequelize.DATE,
    warrantyEndDate: Sequelize.DATE,
    leaseStartDate: Sequelize.DATE,
    leaseEndDate: Sequelize.DATE,
    modelName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    manufacturer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    modelYear: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: Sequelize.DOUBLE,
    isNew: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    deleteReason: Sequelize.STRING(1234),
    imageUrl: Sequelize.STRING,
    isActive: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    createdBy: Sequelize.BIGINT,
    updatedAt: Sequelize.DATE,
    updatedBy: Sequelize.BIGINT,
    deletedAt: Sequelize.DATE,
    deletedBy: Sequelize.BIGINT,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable("Asset");
  }
};
