'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.hasMany(models.Material, {
        foreignKey: 'userId',
      });

      models.Users.hasMany(models.Category, {
        foreignKey: 'userId',
      });

      models.Users.hasMany(models.Supplier, {
        foreignKey: 'userId',
      });

      models.Users.hasMany(models.Product, {
        foreignKey: 'userId',
      });

      models.Users.hasMany(models.Formula, {
        foreignKey: 'userId',
      });

      models.Users.hasMany(models.Production, {
        foreignKey: 'userId',
      });
    }
  }
  Users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      businessName: DataTypes.STRING,
      website: DataTypes.STRING,
      loginToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
