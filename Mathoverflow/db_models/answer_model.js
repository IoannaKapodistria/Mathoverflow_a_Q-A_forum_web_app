const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize_db = require("../config/database");

const Answer = sequelize_db.define(
  "Answer",
  {
    answer_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      //autoIncrement: true, // mallon den xreiazetai me UUID
    },

    body: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    tableName: "Answer",
  }
);

module.exports = Answer;
