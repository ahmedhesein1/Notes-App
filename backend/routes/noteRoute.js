import express from "express";
import * as userControl from "../controllers/userControl.js";
import * as noteControl from "../controllers/noteControl.js";
const router = express.Router();
router
  .route("/")
  .get(userControl.protect, noteControl.getAllNotes)
  .post(userControl.protect, noteControl.addNote);
router("/:id")
  .get(noteControl.getNote)
  .patch(noteControl.updateNote)
  .delete(noteControl.deleteNote);
export default router;
