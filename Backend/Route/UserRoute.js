// routes/users.js
const express = require("express");
const UserModel = require("../model/UserModel.js");
const router = express.Router();
const app = express();
const { getAllUsers, createData } = require("../Controller/UserController");
// Route

router.get("/api/v1/get/user", async (req, res) => {
  try {
    const user = await UserModel.find({}); // Fetches all users from the database
    res.json(user); // Sends the fetched data back in the response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Sends an error message if something goes wrong
  }
});

router.route("/get/user").get(getAllUsers);

router.route("/user/new").post(createData);
//router.route("/api/v1/get/user?page=1").get(getAllUsers);

module.exports = router;
