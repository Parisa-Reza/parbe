import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

// Generate access token
const generateAccessToken = (userId, email) => {
  return jwt.sign({ id: userId, email }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

// Generate refresh token
const generateRefreshToken = (userId, email) => {
  return jwt.sign({ id: userId, email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    // Generate tokens
    const accessToken = generateAccessToken(user._id, user.email);
    const refreshToken = generateRefreshToken(user._id, user.email);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password, refreshToken } = req.body;

    // If refreshToken exists, login via refresh token
    if (refreshToken) {
      jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, payload) => {
        if (err) {
          return res.status(401).json({ message: "unauthorized" });
        }

        const user = await User.findById(payload.id);
        if (!user) {
          return res.status(401).json({ message: "unauthorized" });
        }

        const newAccessToken = generateAccessToken(user._id, user.email);
        const newRefreshToken = generateRefreshToken(user._id, user.email);

        return res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      });
    } else {
      // Normal login with email and password
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "invalid email or password" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: "invalid email or password" });
      }

      const accessToken = generateAccessToken(user._id, user.email);
      const refreshToken = generateRefreshToken(user._id, user.email);

      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        accessToken,
        refreshToken,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const userInfo = await User.findById(req.user.id).select("-password");
    if (!userInfo) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(userInfo);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};
