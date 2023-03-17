'use strict';
const bcrypt = require("bcryptjs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let users = [
      {
        Username:"User A",
        Password: bcrypt.hashSync("12345")
      },
      {
        Username:"User B",
        Password: bcrypt.hashSync("12345")
      },
      {
        Username:"User C",
        Password: bcrypt.hashSync("12345")
      },
      {
        Username:"User D",
        Password: bcrypt.hashSync("12345")
      }
    ]
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
