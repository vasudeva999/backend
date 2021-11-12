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
     let arr = [
       "HR",
       "APPDEV",
       "QA",
       "DATA_SCIENCE",
       "ACCOUNTING"
     ]
 
     while(totalRows--){
       data.push({
         firstName: faker.name.firstName(),
         lastName: faker.name.lastName(),
         email: faker.internet.email(),
         employeeId: faker.datatype.number(1000000),
         department: faker.random.arrayElement(arr),
         location: faker.name.jobArea(),
         mobileNumber: faker.phone.phoneNumber(),
         isActive: faker.datatype.boolean(),
         createdBy: faker.datatype.number(1000000),
         createdAt: faker.date.past(),
         updatedAt: faker.date.future(),
         updatedBy: faker.datatype.number(1000000)
       })
      }

      await queryInterface.bulkInsert("Employee", data, {})
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
