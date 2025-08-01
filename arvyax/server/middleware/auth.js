import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export async function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token is Required",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      console.log("Unauthorized Access");
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access from auth middleware",
      });
    }
    req.user = user;

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "AUTH middleware error response.",
    });
  }
}
