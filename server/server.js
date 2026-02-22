import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import  {authRoutes,sessionRoutes}  from "./routes/index.js"

dotenv.config();
const app = express();

// middleware to handle CORS
app.use(cors({
    origin  : "*",
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    allowedHeaders : ["Content-Type", "Authorization"]
}))


// middleware
app.use(express.json())

connectDB()

//routes
app.use("/api/auth" ,authRoutes)
app.use("/api/session" ,sessionRoutes)
// app.use("/api/question" ,questionRoutes)

// app.use("/api/ai/generate-questions" ,protect, generateInterviewQuestions)
// app.use("/api/ai/generate-explanation" ,protect, generateConceptExplanations)

// server uploads folder

// app.use ("/uploads" , express.static(path.join(__dirname, "uploads"), {}))



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

//server start
const PORT = process.env.PORT || 5000;
app.listen( PORT,()=>{
    console.log(`server running on port ${PORT}`)
})