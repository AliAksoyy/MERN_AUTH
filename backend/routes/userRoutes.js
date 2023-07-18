import express from "express";
import {authUser} from "../controller/userController.js"


const userRoutes = express.Router();

userRoutes.post("/auth", authUser);

export default userRoutes;
