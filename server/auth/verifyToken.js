import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const authenticate = async (req, res, next) => {
	// ======== Get Token From Headers ========
	const authToken = req.headers.authorization;

	// ======== Check Existing Token ========
	if (!authToken || !authToken.startsWith("Bearer")) {
		return res
			.status(401)
			.json({ success: false, message: "Token not found, authorization denied" });
	}

	try {
		const token = authToken.split(" ")[1];
		// ======== Veryify Token ========
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.userId = decoded.id;
		req.role = decoded.role;

		next(); // ======== Must Be Call The next function ========
	} catch (err) {
		if (err.code === "TokenExpiredError") {
			return res.status(401).json({ message: "Token is expired" });
		} else {
			return res.status(401).json({ success: false, message: "Invalid token" });
		}
	}
};

export const restrict = (roles) => async (req, res, next) => {
	const userId = req.userId;
	let user;
	const patient = await User.findById(userId);
	const doctor = await Doctor.findById(userId);

	if (patient) {
		user = patient;
	}

	if (doctor) {
		user = doctor;
	}

	if (!roles.includes(user.role)) {
		return res.status(401).json({ success: false, message: "You are not authorized" });
	}

	next();
};
