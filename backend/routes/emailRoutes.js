import express from "express";
import { sendEmailToUser } from "../controllers/emailController.js";
const router = express.Router();

router.post("/send-email", sendEmailToUser);

export default router;
