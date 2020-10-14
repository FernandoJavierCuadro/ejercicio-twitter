const { mongoose, User, Tweet } = require("../db");

module.exports = {
  renderHome: (req, res) => {},

  renderWelcome: (req, res) => {
    res.render("welcome");
  },

  renderUser: (req, res) => {
    User.findOne({ username: req.params.username }, function (err, user) {
      if (err) {
        return err;
      }
      Tweet.find({ author: user._id })
        .sort({ date: -1 })
        .exec(function (err, tweets) {
          if (err) {
            return err;
          }
          res.render("user", { user, tweets });
        });
    });
  },

  saveTweet: (req, res) => {
    const tweet = new Tweet({
      text: req.body.text,
      author: mongoose.Types.ObjectId(req.body._id),
    });
    tweet.save();
    res.redirect("back");
  },
};
