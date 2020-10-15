const {
  renderHome,
  renderWelcome,
  renderUser,
  followUser,
  renderVisitor,
  saveTweet,
  likeTweet,
  deleteTweet,
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

  app.get("/like/:_id", likeTweet);

  app.get("/delete/:_id", deleteTweet);
}

module.exports = routes;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/welcome");
  }
}
