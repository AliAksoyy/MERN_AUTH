import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";

router
  .post("/", registerUser)
  .post("/auth", authUser)
  .post("/logout", logoutUser)
  .route("/profile")
  .get(getUserProfile)
  .put(updateUserProfile);

export default router;
