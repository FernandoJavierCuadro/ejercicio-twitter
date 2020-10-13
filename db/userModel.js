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

  UserSchema.pre("save", function (next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  });

  const User = mongoose.model("User", UserSchema);

  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return User;
};
