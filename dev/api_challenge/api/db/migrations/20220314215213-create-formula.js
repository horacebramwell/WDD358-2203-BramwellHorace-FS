'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Formulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING
      },
      containerSize: {
        type: Sequelize.DECIMAL
      },
      containerFill: {
        type: Sequelize.DECIMAL
      },
      fragrancePercentage: {
        type: Sequelize.DECIMAL
      },
      waxFill: {
        type: Sequelize.DECIMAL
      },
      unitType: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Formulas');
  }
};