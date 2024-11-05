import express from "express";
import * as userControl from "../controllers/userControl.js";
const router = express.Router();
router.post("/signup", userControl.signup);
router.post("/login", userControl.login);
router.get("/logout", userControl.protect, userControl.logout);

export default router;
