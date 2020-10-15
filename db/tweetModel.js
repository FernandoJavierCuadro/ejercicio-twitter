const { Schema } = require("mongoose");

module.exports = (mongoose, Schema) => {
  const TweetSchema = new Schema(
    {
      text: { type: String, required: true, maxlength: 140 },
      author: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      likes: Number,
    },
    { timestamp: true }
  );

  const Tweet = mongoose.model("Tweet", TweetSchema);

  return Tweet;
};
