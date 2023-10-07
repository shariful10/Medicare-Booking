import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// ======== Get All Review ========
export const getAllReviews = async (req, register) => {
	try {
		const reviews = await Review.find();
		res.status(200).json({ success: true, message: "Successfull", data: reviews });
	} catch (error) {
        res.status(404).json({ success: false, message: "Not Found" });
    }
};
