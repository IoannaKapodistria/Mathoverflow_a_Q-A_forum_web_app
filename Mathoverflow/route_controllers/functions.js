const usersController = require("../db_controllers/usersController");
const questionsController = require("../db_controllers/questionsController");

exports.getSignup = function (req, res) {
  res.render("signup", { message: "" });
};

exports.postSignup = function (req, res) {
  usersController.create_user(req, res);
};

exports.getLogin = function (req, res) {
  res.render("signin");
};

exports.getQuestions = function (req, res) {
  questionsController.showQuestions(req, res);
};

exports.getQuestionsbyId = function (req, res) {
  questionsController.showQuestionsbyId(req, res);
};

exports.getAskQuestion = function (req, res) {
  res.render("ask_question");
};

exports.postSubmitQuestion = function (req, res) {
  console.log(req.body);
  questionsController.create_question(req, res);
};

exports.postAnswer = function (req, res) {
  //console.log(req.body);
  questionsController.create_answer(req, res);
};

exports.getUserbyId = function (req, res) {
  usersController.showUserbyId(req, res);
};

exports.getUsers = function (req, res) {
  usersController.showUsers(req, res);
};

exports.postLogin = function (req, res) {
  usersController.post_login(req, res);
};

exports.getLogout = function (req, res) {
  req.session.destroy();
  res.redirect("/login");
};
