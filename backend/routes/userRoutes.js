import express from "express";
import { updateUser, deleteUser, deleteUsers } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verfiyUser.js";
const router = express.Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.delete("/remove/:id", deleteUsers);

export default router;
