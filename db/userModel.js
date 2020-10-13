const { Schema } = require("mongoose")

module.exports = (mongoose, Schema) => {
    const UserSchema = new Schema ({
        name: String,
        lastname: String,
        email: String,
        username: String,
        password: String, //Bcrypt
        description: String, 
        image: String,
    });

    const User = mongoose.model("User", UserSchema);

    return User;
}