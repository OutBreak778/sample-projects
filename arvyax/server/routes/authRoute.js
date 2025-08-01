import express from "express"
import { getUserData, loginController, logoutController, registerController } from "../controllers/auth.controller.js"
import { auth } from "../middleware/auth.js"
const router = express.Router()

router.post("/auth/register", registerController)
router.post("/auth/login", loginController)
router.post("/auth/logout", logoutController)

router.get("/", auth, getUserData)

export default router