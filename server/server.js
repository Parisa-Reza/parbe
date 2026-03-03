import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import  {protect} from  "./middlewares/index.js"

import connectDB from "./config/db.js";
import  {authRoutes,sessionRoutes,questionRoutes}  from "./routes/index.js"
import {generateInterviewQuestions,generateConceptExplanations} from "./controllers/index.js"

dotenv.config();
const app = express();


app.use(cors());

// middleware
app.use(express.json())

connectDB()

//routes
app.use("/api/auth" ,authRoutes)
app.use("/api/session" ,sessionRoutes)
app.use("/api/question" ,questionRoutes)

app.use("/api/ai/generate-questions" ,protect, generateInterviewQuestions)
app.use("/api/ai/generate-explanation" ,protect, generateConceptExplanations)


//server start
const PORT = process.env.PORT || 5000;
app.listen( PORT,()=>{
    console.log(`server running on port ${PORT}`)
})