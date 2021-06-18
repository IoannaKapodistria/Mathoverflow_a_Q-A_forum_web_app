//npm run watch ---->>>>>>>>> nodemon
const express = require("express");
const sequelize_db = require("./config/database");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const { Sequelize } = require("sequelize");
// initalize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);

var myStore = new SequelizeStore({
  db: sequelize_db,
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds. = 15minutes
  expiration: 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session. = 1 Hour
});

//connection with db
sequelize_db
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

//
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use(
  session({
    secret:
      process.env.secret || "PynOjAuHetAuWawtinAytVunarAcjeBlybEshkEjVudyelwa",
    resave: false,
    store: myStore,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: true,
      maxAge: 600000, // Time is in miliseconds egw nomizw oti einai seconds pantws
    },
  })
);

myStore.sync(); //sundeei to session me tin sequelize

var routes_list = require("./routes/routes_list"); //dilosh router
app.use("/", routes_list);

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.listen(port, () => {
  console.log("listening on port" + port);
});
