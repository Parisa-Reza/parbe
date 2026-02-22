import express from "express";

const router = express.Router();


import  {registerUser,loginUser, getUserProfile,} from "../controllers/index.js"
import  {protect} from  "../middlewares/index.js"

router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/profile",protect,getUserProfile)

export default router
