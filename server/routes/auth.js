import express from "express";
const router = express.Router();

//import  controllers
import { login, register } from "../controllers/auth";

router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
