const captainController = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 charachter long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 charachter long "),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 charachter long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 charachter long"),
    body("vehicle.capacity")  
      .isInt({ min: 1 })
      .withMessage("Capacity must be atleast 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto", "electricAuto"])
      .withMessage("Invalid vehicle type")
  ],
  captainController.registerCaptain
);

module.exports = router;


// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODljNTYxZGMwMTcyMjgwMzYxZDZlMzkiLCJpYXQiOjE3NTUwNzYxMjUsImV4cCI6MTc1NTE2MjUyNX0.lCyigt1ZFAdcuRoQ0g9h8nHmdZSKdKCamw_qWC0qhJc",
//   "captain": {
//     "fullname": {
//       "firstname": "test_captain_firstname",
//       "lastname": "test_captain_lastname"
//     },
//     "email": "test_email@gmail.com",
//     "password": "$2b$10$QKV3mo.v5yqvJ37gJzzvRuBT3WUAIKuZdvjN99JnGCzvngXeQqoeu",
//     "status": "inactive",
//     "vehicle": {
//       "color": "red",
//       "plate": "MP 04 XY 6204",
//       "capacity": 3,
//       "vehicleType": "car"
//     },
//     "_id": "689c561dc0172280361d6e39",
//     "__v": 0
//   }
// }