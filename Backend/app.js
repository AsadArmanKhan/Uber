const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ConnectToDb = require("./DB/db");
const userRoutes = require("./routes/user.routes");
const userModel = require("./models/user.model");
const userController = require("./controllers/user.controller");
const captainRoutes = require("./routes/captain.routes");

ConnectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);


module.exports = app;
