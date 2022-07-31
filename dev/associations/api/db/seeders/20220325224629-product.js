'use strict';

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
      'materials',
      [
        {
          id: '98266ccb-55c6-4f89-9308-f56348aa6974',
          name: 'Coconut soy wax',
          stockLevel: 12,
          minStockLevel: 5,
          catId: 'a7e9f8f0-f8c2-4b8e-b9c6-f8f8f8f8f8f8',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '98266ccb-55c6-4f89-9308-f56348aa6975',
          name: 'Coconut oil',
          stockLevel: 12,
          minStockLevel: 5,
          catId: 'a7e9f8f0-f8c2-4b8e-b9c6-f8f8f8f8f8f8',
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
    await queryInterface.bulkDelete('materials', null, {});
  },
};
