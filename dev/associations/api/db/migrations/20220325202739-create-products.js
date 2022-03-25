'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      stockLevel: {
        type: Sequelize.DECIMAL
      },
      minLevel: {
        type: Sequelize.DECIMAL
      },
      unit: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING
      },
      unitPrice: {
        type: Sequelize.DECIMAL
      },
      categoryId: {
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
    await queryInterface.dropTable('products');
  }
};