import Booking from "../models/BookingSchema.js";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
	const id = req.params.id;

	try {
		const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
		res.status(200).json({ success: true, message: "Successfully updated", data: updatedUser });
	} catch (err) {
		res.status(500).json({ success: false, message: "Failed to update" });
	}
};

export const deleteUser = async (req, res) => {
	const id = req.params.id;

	try {
		await User.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Successfully delete" });
	} catch (err) {
		res.status(500).json({ success: false, message: "Failed to delete" });
	}
};

export const getSingleUser = async (req, res) => {
	const id = req.params.id;

	try {
		const user = await User.findById(id).select("-password");
		res.status(200).json({ success: true, message: "User found", data: user });
	} catch (err) {
		res.status(404).json({ success: false, message: "Not found" });
	}
};

export const getAllUser = async (req, res) => {
	try {
		const users = await User.find({}).select("-password");
		res.status(200).json({ success: true, message: "Users found", data: users });
	} catch (err) {
		res.status(404).json({ success: false, message: "Not found" });
	}
};

export const getUserProfile = async (req, res) => {
	const userId = req.userId;

	try {
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ success: false, message: "User Not Found" });
		}
		const { password, ...rset } = user._doc;
		res.status(200).json({
			success: true,
			message: "Profile info is getting",
			data: { ...rset },
		});
	} catch (error) {
		res.status(500).json({ success: false, message: "Something went wrong, can not get" });
	}
};

export const getMyAppoinments = async (req, res) => {
	try {
		// Step -1: Retrive Appoinments From Booking For Specific User
		const bookings = await Booking.find({ user: req.userId });

		// Step -2: Extract Doctor IDs From Appoinments
		const doctorIds = bookings.map((el) => el.doctor.id);

		// Step -3: Retrive Doctors Using Doctor IDs
		const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");

		res.status(200).json({ success: true, message: "Appoinments are getting", data: doctors });
	} catch (error) {
		res.status(500).json({ success: false, message: "Something went wrong, can not get" });
	}
};
