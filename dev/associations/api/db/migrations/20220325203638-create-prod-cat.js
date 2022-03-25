'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prod_cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prodId: {
        type: Sequelize.UUID
      },
      catId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prod_cats');
  }
};