import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required"],
    },
    email: {
      type: String,
      required: [true, "Your email is required"],
      unique: [true, "Email is already registerd"],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
  },
  {
    timestamps: true,
  }
);
User.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
export default mongoose.model("User", User);
