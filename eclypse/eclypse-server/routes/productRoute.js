import express from "express"
import { getProductController } from "../controller/ProductController.js"

const router = express.Router()

router.get("/", getProductController)

export default router