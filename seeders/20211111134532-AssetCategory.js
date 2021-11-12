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
    let arrName = [
      'Laptop',
      'Keyboard',
      'Mouse',
      'Mobile',
      'Monitors',
      'Headphones',
      'UPS',
      'Printers',
      'Charger head',
      'Charger cable',
      'Datacard',
      'Harddisk',
      'Card reader',
      'Routers',
      'Pendrives',
      'Scanner',
      'Shredder'
    ];

    while(totalRows--){
      data.push({
        name: faker.random.arrayElement(arrName),
        isActive: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        createdBy: faker.datatype.number(1000000),
        updatedAt: faker.date.future(),
        updatedBy: faker.datatype.number(1000000),
      })
    }

     await queryInterface.bulkInsert("AssetCategory", data, {})
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
