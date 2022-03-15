'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Formula.belongsTo(models.Users);
    }
  }
  Formula.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    containerSize: DataTypes.DECIMAL,
    containerFill: DataTypes.DECIMAL,
    fragrancePercentage: DataTypes.DECIMAL,
    waxFill: DataTypes.DECIMAL,
    unitType: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Formula',
  });
  return Formula;
};