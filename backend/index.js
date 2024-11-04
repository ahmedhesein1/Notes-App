import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import globalErrorHandler from "./controllers/errorController.js";
import authRoutes from "./routes/authRoute.js";
import noteRoutes from "./routes/noteRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));
dotenv.config();
mongoose
  .connect(process.env.LOCAL_DB)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Database connection faild");
  });
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use(globalErrorHandler);
const port = process.env.PORT || 1002;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
