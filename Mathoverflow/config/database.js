const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

// Option 2: Passing parameters separately (other dialects)
const sequelize_db = new Sequelize("math_db", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
});
module.exports = sequelize_db;

const modelDefiners = [
  require("../db_models/question_model"),
  require("../db_models/user_model"),
  // Add more models here...
  // require('./models/item'),
];

for (const modelDefiner of modelDefiners) {
  new modelDefiner(sequelize_db);
}

applyExtraSetup(sequelize_db);

sequelize_db
  .sync() //force: true adds a DROP TABLE IF EXISTS before trying to create the table - if you force, existing tables will be overwritten.
  .then(() => console.log("sync ok"))
  .catch((err) => console.error(".sync was called", err));
