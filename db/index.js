const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_DATABASE}`);


const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", (e) => console.log("¡Conexión con la base de datos establecida!"));
 