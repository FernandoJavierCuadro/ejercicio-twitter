require("dotenv").config();
const express = require("express");
const app = express();

const session = require("express-session");
const passport = require("passport");
const routes = require("./routes/routes");
const db = require("./db");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//routes(app);

app.listen(3000, () => {
    console.log("servidor escuchando en el puerto 3000...");
    console.log("ingresar a http://localhost:3000");
  });
