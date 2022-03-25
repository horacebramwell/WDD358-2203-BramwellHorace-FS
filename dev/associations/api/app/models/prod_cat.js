'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prod_cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prod_cat.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      prodId: DataTypes.UUID,
      catId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'prod_cat',
    }
  );
  return prod_cat;
};
