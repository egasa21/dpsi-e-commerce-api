'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasOne(models.User, {
        foreignKey: 'customerID',
        as: 'user'
      });
      Customer.hasMany(models.Order, {
        foreignKey: 'customerID'
      });
    }
  }
  Customer.init({
    customerName: DataTypes.STRING,
    contactName: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};