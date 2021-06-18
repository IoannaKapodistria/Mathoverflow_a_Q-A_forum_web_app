function applyExtraSetup(sequelize) {
  const Question = require("../db_models/question_model");
  const User = require("../db_models/user_model");
  const Answer = require("../db_models/answer_model");

  User.hasMany(Question);
  Question.belongsTo(User);

  User.hasMany(Answer);
  Answer.belongsTo(User);

  Question.hasMany(Answer);
  Answer.belongsTo(Question);
}

module.exports = { applyExtraSetup };
