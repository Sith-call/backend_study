'use strict';

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
   await queryInterface.bulkInsert(
    "Boards", [
      {
        id: 1,
        title: "test 1",
        content: "test content",
        writer: "tester1"
      },
      {
        id: 2,
        title: "test 2",
        content: "test content",
        writer: "tester2"
      },
      {
        id: 3,
        title: "test 3",
        content: "test content",
        writer: "tester3"
      },
      {
        id: 4,
        title: "test 4",
        content: "He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eighty-four days now without taking a fish.",
        writer: "tester3"
      }
    ],
    {}
   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Boards", null, {});
  }
};
