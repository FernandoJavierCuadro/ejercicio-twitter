const db = require("../db");
const passport = require("passport");

module.exports = {
  register: (req, res) => {
    const user= new db.User ({
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      description: req.body.description,
      email: req.body.email,
      image: req.body.image,
    });
    user.save();
  },

  signIn: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),

 /*  facebookCall: passport.authenticate("facebook"),

  facebookSignIn: passport.authenticate("facebook", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  }), */
};
