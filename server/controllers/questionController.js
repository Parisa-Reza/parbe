import { Session, Question } from "../models/index.js";
export const addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: "invalid input data" });
    }

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      })),
    );

    session.questions.push(...createdQuestions.map((q) => q.id));
    await session.save();

    res.status(201).json(createdQuestions);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const togglePinQuestion = async (req, res) => {
  try {

    const question = await Question.findById(req.params.id) 

    if(!question)
    {
        res.status(404).json({ message: "question not found" });

    }

    question.isPinned = !question.isPinned;
    await question.save()
     res.status(201).json({success: true, question});

  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const createQuestionNote = async(req, res) => {
  try {

    const {note}= req.body;
    const question = await Question.findById(req.params.id) 

    if(!question)
    {
        res.status(404).json({ message: "question not found" });

    }

    question.note = note|| ""
    await question.save();

    res.status(200).json({success: true , question})
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
