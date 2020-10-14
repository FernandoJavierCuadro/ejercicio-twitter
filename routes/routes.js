const { renderUser } = require("../controllers/controller");

function routes(app) {
  app.get("/", (req, res) => {
    res.redirect("/login");
  });

  /* app.get("/user", isLoggedIn, renderUser); */
}

module.exports = routes;

/* function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login");
  }
} */
