const { renderUser, renderHome, renderWelcome } = require("../controllers/controller");

function routes(app) {
  app.get("/", (req, res) => {
    res.redirect("/home");
  });

  app.get("/home", isLoggedIn, renderHome);

  app.get("/welcome", renderWelcome);

  app.get("/username/:username", renderUser);
}

module.exports = routes;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/welcome");
  }
}
