'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      material.belongsTo(models.category, {
        foreignKey: 'catId',
        as: 'category',
      });
    }
  }
  material.init(
    {
      name: DataTypes.STRING,
      stockLevel: DataTypes.DECIMAL,
      minStockLevel: DataTypes.DECIMAL,
      catId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'material',
    }
  );
  return material;
};
