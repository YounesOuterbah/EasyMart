import express from "express";
import "dotenv/config.js";
import { connectDB } from "./db/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

connectDB();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "https://grocery-store-intern-uj7c.vercel.app/", // Specify your frontend origin
  credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
