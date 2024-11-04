import mongoose from "mongoose";

const Note = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Note must have a title"],
    },
    content: {
      type: String,
      required: [true, "Note connot be empty"],
    },
    tags: {
      type: [String],
      default: [],
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", Note);
