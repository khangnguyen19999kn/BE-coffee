'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deltailOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  deltailOrder.init({
    codeOrder: DataTypes.STRING,
    idSP: DataTypes.STRING,
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    size_product: DataTypes.STRING,
    quantity: DataTypes.STRING,
    resultPrice: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'deltailOrder',
  });
  return deltailOrder;
};