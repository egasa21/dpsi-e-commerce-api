'use strict';

const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Customer, {
        foreignKey: 'customerID',
        as: 'customer'
      })
    }

    async comparePassword(password) {
      return bcrypt.compare(password, this.password)
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    customerID: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  });
  return User;
};