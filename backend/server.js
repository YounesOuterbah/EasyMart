import express from "express";
import "dotenv/config.js";
import { connectDB } from "./db/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { error } from "./middlewares/error.js";
import cors from "cors";
import { path } from "path";

connectDB();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use(error);
app.use(cors());

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
