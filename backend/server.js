import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port || 5000, () => {
  console.log(`Listening on port ${port}`);
});
