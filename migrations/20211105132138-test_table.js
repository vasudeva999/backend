'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // return queryInterface.createTable("test", {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     allowedNull: false,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    // content: Sequelize.STRING(255)
    // })

    return queryInterface.addColumn('test', 'location', {
      type: Sequelize.STRING(255)
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // return queryInterface.dropTable("test")
    
    return queryInterface.addColumn('test', 'location', {
      type: Sequelize.STRING(255)
    })
  }
};
