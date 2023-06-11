import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router
  .post("/", registerUser)
  .post("/auth", authUser)
  .post("/logout", logoutUser)
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect,updateUserProfile);

export default router;
