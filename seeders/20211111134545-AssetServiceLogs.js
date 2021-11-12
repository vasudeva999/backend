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
     let arr = ['CLOUD_DESIGNS', "SELF"];
 
     while(totalRows--){
       data.push({
         assetId: faker.datatype.number(1000000),
         serviceDate: faker.date.past(),
         vendor: faker.random.arrayElement(arr),
         expectedDeliveryDate: faker.date.future(),
         serviceDescription: faker.commerce.productDescription(),
         deliveryDate: faker.date.future(),
         deliveryDescription: faker.commerce.productDescription(),
         isFreeService: faker.datatype.boolean(),
         isWarrantyClaim: faker.datatype.boolean(),
         cost: faker.commerce.price(),
         imageUrl: faker.image.imageUrl(),
         createdAt: faker.date.past(),
         createdBy: faker.datatype.number(1000000),
         updatedAt: faker.date.future(),
         updatedBy: faker.datatype.number(1000000),
       })
     }
 
     await queryInterface.bulkInsert("AssetServiceLogs", data, {})
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
