'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("AssetCategory", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isActive: Sequelize.BOOLEAN,
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
     await queryInterface.dropTable("AssetCategory");
  }
};
