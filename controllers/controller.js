const { mongoose, User, Tweet } = require("../db");
const moment = require("moment");
moment().format();

module.exports = {
  renderHome: async (req, res) => {
    await User.findById(req.user._id, (err, user) => {
      if (err) {
        return err;
      }
      Tweet.find({ author: { $in: user.following } })
        .populate("author")
        .sort({ date: -1 })
        .exec((err, tweets) => {
          if (err) {
            return err;
          }
          res.render("home", {
            user,
            tweets,
            authUser: req.user.username,
            moment,
          });
        });
    });
  },

  renderWelcome: (req, res) => {
    res.render("welcome");
  },

  renderProfile: async (req, res) => {
    await User.findOne({ username: req.params.username })
      .populate("tweets")
      .exec((err, user) => {
        if (err) {
          return err;
        }
        res.render("profile", { user, authUser: req.user.username, moment });
      });
  },

  renderUser: async (req, res) => {
    await User.findOne({ username: req.params.username })
      .populate("tweets")
      .exec((err, user) => {
        if (err) {
          return err;
        }
        res.render("user", { user, authUser: req.user.username });
      });
  },

  followUser: async (req, res) => {
    await User.findById(req.user._id, (err, user) => {
      const foundObjId = user.following.find(
        (e) => e.toString() === req.params._id.toString()
      );
      if (foundObjId === undefined) {
        user.following.push(req.params._id);
        user.save();
      }
    });
    await User.findById(req.params._id, (err, user) => {
      const foundObjId = user.followers.find(
        (e) => e.toString() === req.user._id.toString()
      );
      if (foundObjId === undefined) {
        user.followers.push(req.user._id);
        user.save();
      }
    });
    res.redirect("back");
  },

  saveTweet: async (req, res) => {
    const tweet = new Tweet({
      text: req.body.text,
      author: mongoose.Types.ObjectId(req.body._id),
    });
    tweet.save();
    await User.findById(req.body._id, (err, user) => {
      user.tweets.push(tweet);
      user.save();
    });
    res.redirect("back");
  },

  likeTweet: async (req, res) => {
    await Tweet.findById(req.params._id, (err, tweet) => {
      tweet.likes++;
      tweet.save();
    });
    res.redirect("back");
  },

  deleteTweet: async (req, res) => {
    await Tweet.findByIdAndRemove(req.params._id, (err, tweet) => {
      if (err) {
        return err;
      }
    });
    res.redirect("back");
  },
};
