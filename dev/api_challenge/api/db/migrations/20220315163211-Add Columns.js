'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('supplier', 'supplierId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      foreignKey: true,
      references: {
        model: 'supplier',
        key: 'supplierId',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('supplier', 'supplierId');
  }
};
