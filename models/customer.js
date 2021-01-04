'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Account)
    }
  };
  Customer.init({
    identityNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Identity Number must be filled"
        },
        len: {
          args: [16, 20],
          msg: "Identity Number minimum 16 characters and maximum 20 characters"
        },
        // Examples of custom validators:
        // isUnique: function(value, next) {
        //   Customer.find({
        //       where: {identityNumber: value},
        //       attributes: ['id']
        //   })
        //   .done(function(error, user) {
        //       if (error)
        //           // Some unexpected error occured with the find method.
        //           return next(error);
        //       if (user)
        //           // We found a user with this email address.
        //           // Pass the error to the next method.
        //           return next('Email address already in use!');
        //       // If we got this far, the email address hasn't been used yet.
        //       // Call next with no arguments when validation is successful.
        //       next();
        //   });
        // }
      },
      unique: {
        args: true,
        msg: 'Duplicate Identity Number!'
      },
    },
    fullName: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fullname  be filled"
        },
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Birthdate  be filled"
        },
      }
    },
    birthDate: DataTypes.DATE,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};