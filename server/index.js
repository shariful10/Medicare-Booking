import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// ========== Middleware ==========
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
	origin: true,
};

app.get("/", (req, res) => {
	res.send("Medicare Booking Server is running...");
});

app.listen(port, () => {
	console.log(`Medicare Booking Server is running on port ${port}`);
});
