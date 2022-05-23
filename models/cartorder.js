'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cartOrder.init({
    fullName: DataTypes.STRING,
    phone: DataTypes.STRING,
    huongDan: DataTypes.STRING,
    diaChi: DataTypes.STRING,
    thanhToan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cartOrder',
  });
  return cartOrder;
};