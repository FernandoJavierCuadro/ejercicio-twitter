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

  app.get("/profile/:username", isLoggedIn, renderUser);

  app.get("/username/:username", isLoggedIn, renderVisitor);

  app.get("/follow/:_id", isLoggedIn, followUser);

  app.post("/username/saveTweet", isLoggedIn, saveTweet);

  app.get("/like/:_id", isLoggedIn, likeTweet);

  app.get("/delete/:_id", isLoggedIn, deleteTweet);
}

module.exports = routes;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/welcome");
  }
}
