'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, {
        foreignKey: 'catId',
        as: 'category',
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      stockLevel: DataTypes.DECIMAL,
      minStockLevel: DataTypes.DECIMAL,
      catId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'product',
    }
  );
  return product;
};
