import expressAsyncHandler from "express-async-handler";

/***@description Auth user/set token
 * route POST /api/users/auth
 * @access Public
 */

const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

/***@description Register a new user
 * route POST /api/users
 * @access Public
 */

const registerUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

/***@description Logout a new user
 * route POST /api/users/logout
 * @access Public
 */

const logoutUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
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

export { authUser, registerUser, logoutUser, getUserProfile,updateUserProfile };
