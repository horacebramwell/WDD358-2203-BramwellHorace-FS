'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.changeColumn('Productions', 'productId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Products',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Productions', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Formulas', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Materials', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Materials', 'supplierId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Suppliers',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Materials', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Categories',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Products', 'materialId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Materials',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Products', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Categories',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Categories', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Suppliers', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      referernces: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  
  },
};
