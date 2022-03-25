'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mat_cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mat_cat.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      matId: DataTypes.UUID,
      catId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'mat_cat',
    }
  );
  return mat_cat;
};
