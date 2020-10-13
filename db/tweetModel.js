const { Schema } = require("mongoose")

module.exports = (mongoose, Schema) => {
    const Tweet = new Schema ({
        text: String,
        author: String,
        date: Date,
        likes: Number
    });

    return Tweet;
}