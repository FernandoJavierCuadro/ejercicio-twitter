const { User } = require("../db");
const db = require("../db");

module.exports = {
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
