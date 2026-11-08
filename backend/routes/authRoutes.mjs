import express from "express";
import { loginUser } from "../controllers/authController.mjs";

const router = express.Router();

// POST - Login route
router.post("/login", loginUser);

export default router;
