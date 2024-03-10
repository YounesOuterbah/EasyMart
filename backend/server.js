import express from "express";
import "dotenv/config.js";
import { connectDB } from "./db/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddle.js";
import stripeAPP from "stripe";

connectDB();

const app = express();
app.use(express.json());

const stripe = stripeAPP(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const corsOptions = {
  origin: [
    "https://grocery-store-intern-uj7c.vercel.app",
    "http://localhost:5173",
    "https://grocerystoreintern.onrender.com",
  ], // Specify your frontend origin
  credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use(errorMiddleware);

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUB_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
