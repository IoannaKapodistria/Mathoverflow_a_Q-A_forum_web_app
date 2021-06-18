const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize_db = require("../config/database");

const Question = sequelize_db.define(
  "Question",
  {
    question_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      //autoIncrement: true, // mallon den xreiazetai me UUID
    },
    title: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    tableName: "Question",
  }
);

module.exports = Question;
