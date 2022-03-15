'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Material.belongsTo(models.Category, {
        foreignKey: 'id',
        onDelete: 'CASCADE',
      });
    }
  }
  Material.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      stockLevel: DataTypes.DECIMAL,
      minStockLevel: DataTypes.DECIMAL,
      unitPrice: DataTypes.DECIMAL,
      sku: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      lastOrderDate: DataTypes.DATE,
      unitType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Material',
    }
  );
  return Material;
};