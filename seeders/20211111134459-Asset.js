// const { fake, date } = require("faker");
const faker = require("faker");

'use strict';

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
        specification: faker.commerce.productDescription(),
        uniqueIdentifier: faker.datatype.number(1000000),
        vendor: faker.random.arrayElement(arr),
        purchaseDate: faker.date.past(),
        warrantyEndDate: faker.date.future(),
        leaseStartDate: faker.date.past(),
        leaseEndDate: faker.date.future(),
        modelName: faker.vehicle.model(),
        manufacturer: faker.vehicle.manufacturer(),
        modelYear: faker.date.past().getFullYear(),
        location: faker.address.latitude(),
        price: faker.commerce.price(10000, 1000000),
        isNew: faker.datatype.boolean(),
        deleteReason: faker.commerce.productDescription(),
        imageUrl: faker.image.imageUrl(),
        isActive: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        createdBy: faker.datatype.number(1000000),
        updatedAt: faker.date.future(),
        updatedBy: faker.datatype.number(1000000),
        deletedAt: faker.date.future(),
        deletedBy: faker.datatype.number(1000000),
      })
    }
    // console.log(data);

    await queryInterface.bulkInsert("Asset", data, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Asset", null, {})
  }
};
