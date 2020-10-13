const { Schema } = require("mongoose")

module.exports = (mongoose, Schema) => {
    const UserSchema = new Schema ({
        name: String,
        lastname: String,
        username: String,
        description: { type: String },
        email: String,
        image: String,
    });

    const User = mongoose.model("User", UserSchema);

    return User;
}