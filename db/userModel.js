const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

module.exports = (mongoose, Schema) => {
  const UserSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
    description: String,
    image: String,
  });

 /*  UserSchema.pre("save", function (user) {
    bcrypt.hashSync(user.password, 10);
  }); */

  const User = mongoose.model("User", UserSchema);

  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return User;
};
