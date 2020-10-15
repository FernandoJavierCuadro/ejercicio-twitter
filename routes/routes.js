const {
  renderHome,
  renderWelcome,
  renderUser,
  followUser,
  renderVisitor,
  saveTweet,
} = require("../controllers/controller");

function routes(app) {
  app.get("/", (req, res) => {
    res.redirect("/home");
  });

  app.get("/home", isLoggedIn, renderHome);

  app.get("/welcome", renderWelcome);

  app.get("/profile/:username", renderUser);

  app.get("/username/:username", renderVisitor);

  app.get("/follow/:_id", followUser);

  app.post("/username/saveTweet", saveTweet);
}

module.exports = routes;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/welcome");
  }
}
