import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const MONGO_URI = process.env.MONGO_URL  
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Database")
  } catch (error) {
    console.log("DB connection Error");
    process.exit(1);
  }
};

export default connectDB