const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  fullname: {
    firstname: { type: String, required: true },
    minlength: [3, "First name must be at least 3 charachters long"],
    required: true,
  },
  lastname: {
    lastname: { type: String, required: true },
    minlength: [3, "Last name must be at least 3 charachters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

UserSchema.methods.genrtareAuthToken = function () {
  const token = jwt.sign({ _id: this._id }.process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hast(password, 10);
};

const userModel = mongoose.model("user", UserSchema);
moodule.exports = userModel;
