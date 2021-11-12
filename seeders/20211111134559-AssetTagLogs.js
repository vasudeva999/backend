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
         employeeId: faker.datatype.number(1000000),
         issuedDate: faker.date.past(),
         issuedReason: faker.commerce.productDescription(),
         returnedDate: faker.date.past(),
         returnedReason: faker.commerce.productDescription(),
         comments: faker.commerce.productDescription(),
         createdAt: faker.date.past(),
         createdBy: faker.datatype.number(1000000),
         updatedAt: faker.date.past(),
         updatedBy: faker.datatype.number(1000000)
       })
     }

     await queryInterface.bulkInsert("AssetTagLogs", data, {})
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
