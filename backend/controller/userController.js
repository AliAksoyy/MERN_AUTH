import expressAsyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
/***@description Auth user/set token
 * route POST /api/users/auth
 * @access Public
 */

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.comparePasssword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      name: user.name,
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

/***@description Register a new user
 * route POST /api/users
 * @access Public
 */

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(401);
    throw new Error(`User already exists`);
  }

  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error(`Invalid user data`);
  }
});

/***@description Logout a new user
 * route POST /api/users/logout
 * @access Public
 */

const logoutUser = expressAsyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({message:"User logout"})
});

/***@description Get user profile
 * route GET /api/users/profile
 * @access Private
 */

const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User" });
});
/***@description Update user profile
 * route PUT /api/users/profile
 * @access Private
 */

const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "UpdateUserProfile User" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
