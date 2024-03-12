import express from "express";
import { google, signup, signin, getAllUsers } from "../controllers/authController.js";
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
