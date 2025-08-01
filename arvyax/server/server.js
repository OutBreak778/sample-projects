import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config({ quiet: true });

const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("DB connection Error:", error.message);
    process.exit(1);
  }
};
startServer();
