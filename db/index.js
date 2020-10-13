const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(`mongodb://localhost/${process.env.DB_DATABASE}`);
const UserModel = require("./userModel");
const TweetModel = require("./tweetModel");
const { usersSeed } = require("../seeder");

const User = UserModel(mongoose, Schema);
const Tweet = TweetModel(mongoose, Schema);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", (e) =>
  console.log("¡Conexión con la base de datos establecida!")
);

module.exports = {
  mongoose,
  User,
  Tweet,
};

usersSeed(mongoose, User);
