import express from 'express'
import { togglePinQuestion, createQuestionNote, addQuestionsToSession } from "../controllers/index.js"
import { protect } from "../middlewares/index.js"


const router = express.Router();

router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, togglePinQuestion);
router.post("/:id/note", protect, createQuestionNote);

export default router