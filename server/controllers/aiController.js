import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import {
  conceptExplainingPrompt,
  questionAnswerPrompt,
} from "../utils/prompts.js";

dotenv.config();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;
    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      res.status(400).json({ message: "Missing input field" });
      return;
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions,
    );
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    let rawText = response.text;

    const cleanText = rawText
      .replace(/^```json\s*/, "") // remove starting ```json
      .replace(/```$/, "") // remove ending ```
      .trim(); // remove extra spaces

    const data = JSON.parse(cleanText);
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to generate question", error: error.message });
  }
};

export const generateConceptExplanations = async (req, res) => {
  try {
    const { question } = req.body;
        if(!question){
            return res.status(400).json({ message: "Missing required fields" });
        }

        const prompt = conceptExplainingPrompt(question);

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
        });

        let rawText = response.text;


        const cleanText = rawText
            .replace(/^```json\s*/, "") //remove starting ```json
            .replace(/```$/, "") // remove ending
            .trim(); // remove extra spaces

        
        const data = JSON.parse(cleanText);

        res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to generate concept explanation ", error: error.message });
  }
};
