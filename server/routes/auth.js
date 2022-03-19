import express from "express";
const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

//import  controllers
import { login, register, logout, currentUser } from "../controllers/auth";

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/logout", logout);
router.get("/auth/current-user", requireSignin, currentUser);

module.exports = router;
