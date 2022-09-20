import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const error = validationResult(req);
  // body data if error
  if (!error.isEmpty()) {
    res.status(400);
    throw new Error("Fill all field properly");
  }
  //check if user email already exiting ?
  const exitingUser = User.findOne({ email });
  if (exitingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashpasword = await bcrypt.hash(password, salt);

  const user = User.create({
    name,
    email,
    hashpasword,
  });
  generateToken(user._id);

  res.status(201).json({
    success: "ok",
    post: user._id,
    token: generateToken(user._id),
  });
};
export const loginUser = (req, res) => {};

const generateToken = async (_id) => {
  const token = await jwt.sign(_id, JWT_SECRET);
};
