'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerID'
      });
      Order.belongsTo(models.Employee, {
        foreignKey: 'employeeID'
      });
      Order.belongsTo(models.Shipper, {
        foreignKey: 'shipperID'
      });
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'orderID'
      });
    }
  }
  Order.init({
    customerID: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    employeeID: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    shipperID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};