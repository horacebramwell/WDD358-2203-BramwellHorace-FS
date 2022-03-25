'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materials', {
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
      sku: {
        type: Sequelize.STRING
      },
      supplier: {
        type: Sequelize.STRING
      },
      unit: {
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
    await queryInterface.dropTable('materials');
  }
};