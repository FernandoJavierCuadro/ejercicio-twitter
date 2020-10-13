const { Schema } = require("mongoose");

module.exports = (mongoose, Schema) => {
  const TweetSchema = new Schema({
    text: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    date: Date,
    likes: Number,
  });

  const Tweet = mongoose.model("Tweet", TweetSchema);

  return Tweet;
};
