'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Product.belongsTo(models.Users);
      // models.Product.belongsTo(models.Category);
      // models.Product.hasMany(models.Material);
    }
  }
  Product.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    stockLevel: DataTypes.INTEGER,
    materialId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    unitType: DataTypes.STRING,
    minStockLevel: DataTypes.STRING,
    unitPrice: DataTypes.DECIMAL,
    sku: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};