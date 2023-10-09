import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";

const ProfileSettings = ({ user }) => {
	const navigate = useNavigate();
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		photo: null,
		gender: "",
		bloodType: "",
	});

	useEffect(() => {
		setFormData({
			name: user.name,
			email: user.email,
			photo: user.photo,
			gender: user.gender,
			bloodType: user.bloodType,
			password: user.password,
		});
	}, [user]);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileInputChange = async (e) => {
		const file = e.target.files[0];
		const data = await uploadImageToCloudinary(file);

		setSelectedFile(data.url);
		setFormData({ ...formData, photo: data.url });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await fetch(`${BASE_URL}/users/${user._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});
			const { message } = await res.json();

			if (!res.ok) {
				throw new Error(message);
			}

			setLoading(false);
			toast.success(message);
			navigate("/users/profile/me");
		} catch (err) {
			toast.error(err.message);
			setLoading(false);
		}
	};

	return (
		<div className="mt-10">
			<form onSubmit={handleSubmit}>
				<div className="mb-5">
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Full Name"
						className="w-full px-2 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
						required
					/>
				</div>
				<div className="mb-5">
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="Enter Your Email"
						className="w-full px-2 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
						aria-readonly
                        readOnly
					/>
				</div>
				<div className="mb-5">
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						placeholder="Password"
						className="w-full px-2 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						name="bloodType"
						value={formData.bloodType}
						onChange={handleInputChange}
						placeholder="Blood Type"
						className="w-full px-2 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
						required
					/>
				</div>
				<div className="mb-5 flex items-center justify-between">
					<label className="text-headingsColor font-bold text-[16px] leading-7">
						Gender:
						<select
							name="gender"
							value={formData.gender}
							onChange={handleInputChange}
							className="text-headingsColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
						>
							<option value="select">Select</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</label>
				</div>
				<div className="mb-5 flex items-center gap-3">
					{formData.photo && (
						<figure className="w-[60px] h-[60px] rounded-[100%] flex items-center justify-center">
							<img
								src={formData.photo}
								alt="Image"
								className="w-[60px] h-[60px] rounded-[100%]"
							/>
						</figure>
					)}
					<div className="border-gray-300 rounded-lg bg-[#0066FF46] hover:bg-[#CCF0F3] py-4 px-5 max-w-fit group">
						<label>
							<input
								onChange={handleFileInputChange}
								className="cursor-pointer hidden"
								type="file"
								name="photo"
								id="photo"
								accept="image/*"
								hidden
							/>
							<div className="text-primaryColor group-hover:text-irisBlueColor text-[15px] font-semibold cursor-pointer flex gap-2 justify-center items-center">
								{selectedFile
									? selectedFile.name
									: "Upload Image"}
							</div>
						</label>
					</div>
				</div>
				<div className="mt-12">
					<button
						type="submit"
						disabled={loading && true}
						className="btn__submit primary__btn"
					>
						{loading ? (
							<HashLoader size={24} color="#FFFFFF" />
						) : (
							"Update"
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProfileSettings;
