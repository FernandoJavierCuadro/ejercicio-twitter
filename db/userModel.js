const { Schema } = require("mongoose")

module.exports = (mongoose, Schema) => {
    const User = new Schema ({
        name: String,
        lastname: String,
        username: String,
        description: String,
        email: String,
        image: String,
    });
    
    return User;
}