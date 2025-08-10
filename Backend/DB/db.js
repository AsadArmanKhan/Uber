const mongoose = require("mongoose");

function ConnectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, {
      // userNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the database successfully");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
}
module.exports = ConnectToDb;
