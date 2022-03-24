'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Supplier.hasMany(models.Material);
      // models.Supplier.belongsTo(models.Users);
      models.Supplier.hasMany(models.Material, {
        foreignKey: 'supplierId',
      });
    }
  }
  Supplier.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};