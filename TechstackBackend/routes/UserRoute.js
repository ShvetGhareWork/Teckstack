const express = require("express");
const {
  loginUser,
  registerUser,
  adminLogin,
  getProfile,
  saveUserDetails,
} = require("../controllers/UserController");
const AuthUser = require("../middlewares/AuthUser"); // Import the middleware

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile", AuthUser, getProfile); // Apply the middleware here
userRouter.post("/details", AuthUser, saveUserDetails); // Apply the middleware here
module.exports = userRouter;
