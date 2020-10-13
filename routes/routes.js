const { renderHome } = require("../controllers/controller");

function routes(app) {
  app.get("/", (req, res) => {
    res.redirect("/registro");
  });

  /* app.get("/home", isLoggedIn, renderHome); */
}

module.exports = routes;

/* function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login");
  }
} */
