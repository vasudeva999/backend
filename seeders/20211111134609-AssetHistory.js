'use strict';
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = [];
     let totalRows = 50;
 
     while(totalRows--){
       data.push({
        assetId: faker.datatype.number(1000000),
        specification: faker.commerce.productDescription(),
        leaseStartDate: faker.date.past(),
        leaseEndDate: faker.date.future(),
        location: faker.address.latitude(),
        isNew: faker.datatype.boolean(),
        isActive: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        createdBy: faker.datatype.number(1000000)
       })
      }

    await queryInterface.bulkInsert("AssetHistory", data, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
