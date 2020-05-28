const express = require("express");
const router = express.Router();



const UserController = require("../controllers/user");
const checkAuth = require("../middleware/check-auth");


// SigningUp a new user
router.post("/signup", UserController.user_signup);


// Login the user using JWT token

router.post("/login", UserController.user_login);


// Deleting a user
router.delete("/:userId", checkAuth, UserController.user_delete);



module.exports = router;