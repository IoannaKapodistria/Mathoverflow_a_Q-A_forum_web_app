const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize_db = require("../config/database");

const User = sequelize_db.define(
  "User",
  {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true, //https://stackoverflow.com/questions/22932447/sequelize-validation-throwing-error
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "User",
  }
);

module.exports = User;
