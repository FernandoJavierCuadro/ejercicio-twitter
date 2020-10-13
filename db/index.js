const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_DATABASE}`);


