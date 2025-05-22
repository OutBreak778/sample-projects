import express from "express"
import cors from "cors"
import productRoute from "./routes/productRoute.js"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
 
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'public/images')));



//routes
app.use('/api/v4', productRoute)

export default app