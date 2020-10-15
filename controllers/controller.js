const { mongoose, User, Tweet } = require("../db");

module.exports = {
  renderHome: (req, res) => {
    User.findById(req.user._id)
      .populate({
        path: "following",
        populate: {
          path: "tweets",
          options: { sort: { date: -1 } },
          populate: "author",
        },
      })
      .exec((err, user) => {
        if (err) {
          return err;
        }
        res.render("home", { user });
      });
  },

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

  renderVisitor: (req, res) => {
    User.findOne({ username: req.params.username })
      .populate("tweets")
      .exec((err, user) => {
        if (err) {
          return err;
        }
        res.render("user-visitor", { user });
      });
  },

  followUser: (req, res) => {
    User.findById(req.user._id, (err, user) => {
      user.following.push(req.params._id);
      user.save();
    });
    User.findById(req.params._id, (err, user) => {
      user.followers.push(req.user._id);
      user.save();
    });
    res.redirect("back");
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
  },

  likeTweet: (req, res) => {
    Tweet.findById(req.params._id, (err, tweet) => {
      tweet.likes++;
      tweet.save();
    });
    res.redirect("back");
  },

  deleteTweet: (req, res) => {
    Tweet.findByIdAndRemove(req.params._id, (err, tweet) => {
      if (err) {
        return err;
      }
    });
    res.redirect("back");
  }
};
