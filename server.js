require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const passport = require("passport");
const routes = require("./routes/routes");
const authRoutes = require("./routes/authRoutes");
const strategy = require("./passport-config");
const db = require("./db");
strategy(passport);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db.mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());

routes(app);
authRoutes(app);

app.listen( APP_PORT, () => {
  console.log("ingresar a ");
});
