import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
	origin: true,
};

// ========== Database Connection ==========
mongoose.set("strictQuery", false);

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to MongoDB Database");
	} catch (err) {
		console.log("Failed to Connect With MongoDB Database");
	}
};

// ========== Middleware ==========
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

app.get("/", (req, res) => {
	res.send("Medicare Booking Server is running...");
});

app.listen(port, () => {
	connectDB();
	console.log(`Medicare Booking Server is running on port ${port}`);
});
