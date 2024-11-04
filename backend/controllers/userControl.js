import express from "express";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return next(new AppError("User is already registerd login insteed", 404));
  }
  const newUser = await User.create(req.body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
  next();
});
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!user || !isMatch) {
    return next(new AppError("Email or Password is NOT CORRECT", 404));
  }
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "90d" }
  );
  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      message: "User logged in successfully",
      token,
      data: {
        name: user.name,
        email: user.email,
        token,
      },
    });
});
export const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(new AppError("User is not logged in."));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new AppError("Please log in again."));
  }
  req.user = user;
  decoded
    ? next()
    : next(new AppError("invalid token please log in again", 403));
});
