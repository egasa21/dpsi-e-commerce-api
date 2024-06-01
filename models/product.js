'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Supplier, {
        foreignKey: 'supplierID'
      });
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryID'
      });
      Product.hasMany(models.OrderDetail, {
        foreignKey: 'productID'
      });
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    supplierID: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};