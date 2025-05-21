import express from "express"
import cors from "cors"
import productRoute from "./routes/productRoute.js"

const app = express()
 
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

//routes
app.use('/', productRoute)

export default app