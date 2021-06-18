const express = require("express");
const path = require("path");
const route_functions = require("../route_controllers/functions");
const usersController = require("../db_controllers/usersController");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/questions");
});

router.get("/signup", route_functions.getSignup);
router.post("/signup", route_functions.postSignup);

//router.get("/login", route_functions.getlogin);

//router.post("/login", route_functions.postlogin);

router.get(
  "/questions",
  //route_functions.checkAuthenticated,
  route_functions.getQuestions
);

router.get(
  "/questions/:id",
  usersController.sessionChecker,
  route_functions.getQuestionsbyId
);

router.get(
  "/ask",
  usersController.sessionChecker,
  route_functions.getAskQuestion
);

router.post("/questions", route_functions.postSubmitQuestion);

router.post("/answer", route_functions.postAnswer);

router.get("/users/:id", route_functions.getUserbyId);

router.get("/users", route_functions.getUsers);

//router.get("/login", route_functions.getSessionChecker);
router.post("/login", route_functions.postLogin);
router.get("/login", route_functions.getLogin);

router.get("/logout", route_functions.getLogout);

router.get("/islogged", function (req, res) {
  //mono g tobutton log in/out
  if (req.session.user_sid) {
    res.send(
      JSON.stringify({ islogged: "true", userId: req.session.user_sid })
    );
  } else {
    res.send(JSON.stringify({ islogged: "false" }));
  }
});

module.exports = router;
