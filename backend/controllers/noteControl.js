import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
export const getAllNotes = asyncHandler(async (req, res, next) => {
  const notes = await Note.find();
  if (!notes) {
    return next(new AppError("You Have No Notes", 404));
  }
  res.status(200).json({
    success: true,
    data: notes,
  });
});
export const addNote = asyncHandler(async (req, res, next) => {
  const { title, content, tags } = req.body;
  const userId = req.user.id;
  const newNote = await Note.create({ title, content, tags, userId });
  res.status(201).json({
    success: true,
    data: newNote,
  });
  next();
});

export const getNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return next(new AppError("Note not found", 404));
  }
  res.status(200).json({
    success: true,
    data: note,
  });
  next();
});
export const updateNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!note) {
    return next(new AppError("Note not found", 404));
  }
  res.status(200).json({
    success: true,
    data: note,
  });
  next();
});
export const deleteNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findByIdAndUpdate(req.params.id);
  if (!note) {
    return next(new AppError("Note not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    data: null,
  });
  next();
});
