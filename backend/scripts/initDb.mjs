import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import User from "./models/User.mjs";

dotenv.config();

const initDb = async () => {
  try {
    await connectDB();

    const user = new User({
      name: "Test User",
      email: "test@example.com",
      password: "123456",
    });

    await user.save();
    console.log("✅ Test user added to database");

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Initialization error:", err.message);
  }
};

initDb();
