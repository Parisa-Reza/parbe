const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("connected to DB");
  } catch(error) {
    console.error("Failed to connect with DB",error);
    process.exit(1); //immediately stops the Node.js process.
  } 
};

module.exports = connectDB;
