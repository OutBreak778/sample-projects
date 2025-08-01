import express from "express";
import {
  createSession,
  deleteSession,
  getAllSession,
  getSingleSession,
  publishSession,
  updateSession,
} from "../controllers/session.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/", auth, createSession);
router.get("/my-session", auth, getAllSession);
router.get("/my-session/:id", auth, getSingleSession);
router.patch("/my-session/:id", auth, updateSession);
router.delete("/my-session/:id", auth, deleteSession);
router.post("/my-session/publish", auth, publishSession);

export default router;
