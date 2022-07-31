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
    await queryInterface.bulkInsert('Users', [{
      email: 'john@email.com',
      password: '123456',
      name: 'John Doe',
      businessName: 'John Doe',
      website: 'www.john.com',
      loginToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'stacy@email.com',
      password: '123456',
      name: 'Stacy Smith',
      businessName: 'Stacy Smith',
      website: 'www.stacy.com',
      loginToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
      
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
