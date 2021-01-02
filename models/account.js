'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.Customer)
    }
  };
  Account.init({
    type: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    accountNumber: DataTypes.STRING,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Account',
    hooks: {
      beforeCreate(instance, options) {
        if(!instance.accountNumber) {
          instance.accountNumber = (Math.floor(Math.random()*10000000000))
        }
      }
    }
  });
  return Account;
};