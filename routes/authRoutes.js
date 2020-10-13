const {
  signIn,
  register,
  facebookCall,
  facebookSignIn,
} = require("../controllers/authController");

function authRoutes(app) {
  /* LOGIN */
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post("/login", signIn);

  /* REGISTRO */
  app.get("/registro", (req, res) => {
    res.render("register");
  });

  app.post("/registro", (req, res) => {
    register(req, res);
    res.redirect("/login");
  });

  /* app.get("/auth/facebook", facebookCall);

  app.get("/auth/facebook/callback", facebookSignIn);

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  }); */
}

module.exports = authRoutes;
