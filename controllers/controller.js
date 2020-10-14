const { User } = require("../db");
const db = require("../db");

module.exports = {
  renderHome: (req, res) => {

  },
  
  renderWelcome: (req, res) => {
    res.render("welcome");
  },

  renderUser: (req, res) => {
    db.User.findOne({ username: req.params.username }, function (err, user) {
      console.log(req.params.username);
      if (err) {
        return err;
      }
      res.render("user", {user});
    }) 
  },
};
