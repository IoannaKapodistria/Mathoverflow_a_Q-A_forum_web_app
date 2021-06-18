var Question = require("../db_models/question_model");
var Answer = require("../db_models/answer_model");

exports.showQuestions = async function (req, res) {
  try {
    const questions = await Question.findAll();

    res.render("questions", {
      questions,
    });
  } catch (e) {
    console.log("error is :", e.message);
  }
};

exports.showQuestionsbyId = async function (req, res) {
  try {
    let id = req.params.id; //pairnw to id ap t url
    //console.log(id);
    const questionwithid = await Question.findByPk(id);
    //answer body pare db
    const answers = await Answer.findAll({ where: { QuestionQuestionId: id } });
    console.log(answers);

    res.render("questionid", {
      question_title: questionwithid.title,
      question_body: questionwithid.body,
      answers: answers,
    });
  } catch (e) {
    console.log("error is :", e.message);
  }
};

exports.create_question = async function (req, res) {
  try {
    const question = await Question.create({
      title: req.body.title,
      body: req.body.body,
      UserUserId: req.session.user_sid,
    });

    res.redirect("/questions");
    //res.render("questions");
  } catch (e) {
    console.log("error is :", e.message, e);
    res.render("questions");
  }
};

exports.create_answer = async function (req, res) {
  try {
    const answer = await Answer.create({
      //title: req.body.title,
      body: req.body.body,
      UserUserId: req.session.user_sid,
      QuestionQuestionId: req.body.QuestionQuestionId,
    });
    console.log("CREATE ANSWER USER SID LOG ", req.session.user_sid);
    //res.redirect("questions/" + req.body.QuestionQuestionId);
    //res.redirect("/questions");
    res.redirect("/questions/" + req.body.QuestionQuestionId);
    //res.render("questions");
  } catch (e) {
    console.log("error is :", e.message, e);
    res.redirect("/questions");
    //mipws na to stelnw sto error page
  }
};
