import express from "express"
import cors from "cors"

import authRoutes from "./routes/authRoute.js"
import sessionRoute from "./routes/sessionRoute.js"
import cookieParser from "cookie-parser"

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.urlencoded({extended: true}))

// Routes
app.use("/api/user", authRoutes)
app.use("/api/session", sessionRoute)

export default app