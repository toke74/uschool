import express from "express";
const router = express.Router();

//import  controllers
import { login, register, logout } from "../controllers/auth";

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/logout", logout);
module.exports = router;
