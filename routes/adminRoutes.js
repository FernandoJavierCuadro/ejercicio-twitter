const {} = require("../controllers/adminController");

function adminRoutes(app) {
  /* ADMIN */
  app.use("/admin", isLoggedIn);

  app.get("/registro", (req, res) => {
    res.render("register");
  });
}

module.exports = adminRoutes;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login");
  }
}
