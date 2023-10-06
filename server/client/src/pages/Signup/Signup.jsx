import signupImg from "../../assets/images/signup.gif";
import avatar from "../../assets/images/doctor-img03.png";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
	const [uploadButtonText, setUploadButtonText] = useState("Upload Photo");
	const [selectedFile, setSelectedFile] = useState(null);
	const [previewURL, setPreviewURL] = useState("");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		photo: selectedFile,
		gender: "",
		role: "patient",
	});

	const handleImageChange = async (image) => {
		setUploadButtonText(image.name);
	};

	const handleFileInputChange = async (e) => {
		const file = e.target.files[0];
		console.log(file);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const buttonText = uploadButtonText.slice(0, 50);

	return (
		<section>
			<div className="container">
				<div className="grid lg:grid-cols-2 md:gap-16">
					{/* =====>>===== Image Box =====>>===== */}
					<div className="bg-primaryColor rounded-lg md:rounded-l-lg">
						<figure className="rounded-l-lg">
							<img
								src={signupImg}
								alt=""
								className="w-full  rounded-lg md:rounded-l-lg"
							/>
						</figure>
					</div>
					{/* =====>>===== Signup Form =====>>===== */}
					<div className="rounded-l-lg lg:pl-16 lg:py-16 mt-10 md:mt-0">
						<h3 className="text-primaryColor text-[22px] leading-9 font-bold mb-10">
							Creatr an <span className="text-irisBlueColor">account</span>
						</h3>
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
									required
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
									required
								/>
							</div>
							<div className="mb-5 flex items-center justify-between">
								<label className="text-headingsColor font-bold text-[16px] leading-7">
									Are you a:
									<select
										name="role"
										value={formData.role}
										onChange={handleInputChange}
										className="text-headingsColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
									>
										<option value="patient">Patient</option>
										<option value="doctor">Doctor</option>
									</select>
								</label>
								<label className="text-headingsColor font-bold text-[16px] leading-7">
									Gender:
									<select
										name="gender"
										value={formData.gender}
										onChange={handleInputChange}
										className="text-headingsColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
									>
										<option disabled value="select">
											Select
										</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>
									</select>
								</label>
							</div>
							<div className="mb-5 flex items-center gap-3">
								<figure className="w-[60px] h-[60px] rounded-full border-2 border-primaryColor flex items-center justify-center">
									<img src={avatar} alt="" className="w-full rounded-full" />
								</figure>
								<div className="border-gray-300 rounded-lg bg-[#0066FF46] hover:bg-[#CCF0F3] py-4 px-5 max-w-fit group">
									<label>
										<input
											onChange={(e) => handleImageChange(e.target.files[0])}
											className="cursor-pointer hidden"
											type="file"
											name="photo"
											id="photo"
											accept="image/*"
											hidden
										/>
										<div className="text-primaryColor group-hover:text-irisBlueColor text-[15px] font-semibold cursor-pointer flex gap-2 justify-center items-center">
											{buttonText}
										</div>
									</label>
								</div>
							</div>
							<div className="mt-12">
								<BtnSubmit title={"Sign Up"} />
							</div>
							<p className="mt-5 text-textColor text-center">
								Already have an account?
								<Link
									to="/login"
									className="text-primaryColor hover:text-irisBlueColor font-medium ml-1 hover:underline"
								>
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
