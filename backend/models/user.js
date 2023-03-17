'use strict';
const bcrypt = require("bcryptjs")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg:"Username cannot be empty"
        },
        notNull:{
          msg:"Username cannot be empty"
        }

      }
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password cannot be empty"
        },
        notEmpty: {
          msg: "Password cannot be empty"
        },
        len: {
          args: [5, 8],
          msg: "Password length must be between 5 - 8"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(user => {
    user.Password =  bcrypt.hashSync(user.Password)
  })

  return User;
};