import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import SessionModel from "../models/session.js";

export async function registerController(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const round = 10;
  try {
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: "User Already exists.",
      });
    }

    const hashed = await bcrypt.hash(password, round);
    const data = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashed,
    });

    const token = jwt.sign(
      { email: data.email, _id: data._id },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );
    res.cookie("token", token);

    console.log("This is register Page");
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

export async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong!",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "3d",
      }
    );

    res.cookie("token", token);

    return res.status(200).json({
      success: true,
      message: "login successfull",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

export async function logoutController(req, res) {
  try {
    res.clearCookie("token");
    return res.status(201).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function getUserData(req, res) {
  try {
    const user = await UserModel.findById(req.user._id).select("email firstName lastName")
    if(!user){
      return res.status(401).json({
        success: false,
        message: "Access denied"
      })
    }
    return res.status(200).json({
      success: true,
      message: "User Data",
      user
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
} 