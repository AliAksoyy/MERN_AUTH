import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
import connectDB from "./config/db.js";

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use(notFound);
app.use(errorHandler);

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
