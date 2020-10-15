const { mongoose, User, Tweet } = require("../db");

module.exports = {
  renderHome: (req, res) => {},

  renderWelcome: (req, res) => {
    res.render("welcome");
  },

  renderUser: (req, res) => {
    User.findOne({ username: req.params.username })
      .populate("tweets")
      .exec((err, user) => {
        if (err) {
          return err;
        }
        res.render("user", { user });
      });
  },

  saveTweet: (req, res) => {
    const tweet = new Tweet({
      text: req.body.text,
      author: mongoose.Types.ObjectId(req.body._id),
    });
    tweet.save();
    User.findById(req.body._id, (err, user) => {
      user.tweets.push(tweet);
      user.save();
    });
    res.redirect("back");
  }
    
}
