import express from "express";
import "dotenv/config.js";
import { connectDB } from "./db/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { error } from "./middlewares/error.js";
import cors from "cors";

connectDB();

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use(error);

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
