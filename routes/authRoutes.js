const {
  signIn,
  register,
} = require("../controllers/authController");

function authRoutes(app) {
  /* LOGIN */
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post("/login", signIn, (req, res) => {
    res.redirect(`/${req.user.name}`);
  });

  /* REGISTRO */
  app.get("/registro", (req, res) => {
    res.render("register");
  });

  app.post("/registro", (req, res) => {
    register(req, res);
    res.redirect("/login");
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
}

module.exports = authRoutes;
