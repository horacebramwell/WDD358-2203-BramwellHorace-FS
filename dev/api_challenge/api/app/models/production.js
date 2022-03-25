'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Production.belongsTo(models.Product, {
        foreignKey: 'id',
      });
    }
  }
  Production.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    productQuantity: DataTypes.INTEGER,
    dueDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Production',
  });
  return Production;
};