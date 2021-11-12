'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("Employee", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employeeId: Sequelize.STRING,
      department: {
        type: Sequelize.ENUM("HR", "APPDEV", "QA", "DATA_SCIENCE", "ACCOUNTING"),
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobileNumber: Sequelize.STRING,
      isActive: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Employee");
  }
};
