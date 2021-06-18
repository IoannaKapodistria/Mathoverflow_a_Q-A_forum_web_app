var User = require("../db_models/user_model");
var Question = require("../db_models/question_model");
var Answer = require("../db_models/answer_model");
const Session = require("express-session");

exports.create_user = async function (req, res) {
  console.log(req.body);
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, // mono clear text, xwris hash h kruptografish
    });

    res.render("signup", {
      message: "Account successfully created. You can now Log In.",
    });
  } catch (e) {
    console.log("error is :", e.message);
    res.render("signup", {
      message: e.message + ": Username or Email already exists.",
    });
  }
};

exports.showUserbyId = async function (req, res) {
  try {
    let user_id = req.params.id; //pairnei to id apo to url
    //console.log(id);
    const Userwithid = await User.findByPk(user_id);
    //answer body pare db
    const answers = await Answer.findAll({ where: { UserUserId: user_id } });
    const questions = await Question.findAll({
      where: { UserUserId: user_id },
    });
    //console.log(answers);

    res.render("userid", {
      user_name: Userwithid.username,

      answers: answers,
      questions: questions,
    });
  } catch (e) {
    console.log("error is :", e.message);
  }
};

exports.showUsers = async function (req, res) {
  try {
    const users = await User.findAll();

    res.render("users", {
      users,
    });
  } catch (e) {
    console.log("error is :", e.message);
  }
};

exports.post_login = async function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  await User.findOne({ where: { username: username } }).then(function (user) {
    if (!user) {
      res.redirect("/login");
    } else if (password !== user.password) {
      res.redirect("/login");
    } else {
      req.session.user_sid = user.dataValues.user_id;
      res.redirect("/questions");
    }
  });
};

exports.sessionChecker = (req, res, next) => {
  if (req.session.user_sid) {
    console.log("user is logged in");
    next();
  } else {
    res.redirect("/login");
  }
};
