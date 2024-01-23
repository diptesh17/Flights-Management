"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Gondur Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dhule Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shirpur Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jalgaon Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
