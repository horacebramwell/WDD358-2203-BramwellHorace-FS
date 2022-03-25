'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      stockLevel: DataTypes.DECIMAL,
      minLevel: DataTypes.DECIMAL,
      unit: DataTypes.STRING,
      sku: DataTypes.STRING,
      unitPrice: DataTypes.DECIMAL,
      categoryId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'products',
    }
  );
  return products;
};
