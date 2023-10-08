import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section className="px-5 lg:px-0">
			<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 container">
				<h3 className="text-primaryColor text-[22px] leading-9 font-bold mb-10 text-center">
					Hello! <span className="text-irisBlueColor">Welcome</span> Back 🥳
				</h3>
				<form onSubmit={handleSubmit} className="py-4 md:py-0">
					<div className="mb-5">
						<input
							type="email"
							name="email"
							placeholder="Enter Your Email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-2 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
							required
						/>
					</div>
					<div className="mb-5">
						<input
							type="password"
							name="password"
							placeholder="Enter Your Password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full px-2 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
							required
						/>
					</div>
					<div className="mt-12">
						<button
							type="submit"
							disabled={loading && true}
							className="bg-primaryColor w-full px-5 md:px-10 py-2 md:py-3 rounded-lg md:font-semibold primary__btn text-white"
						>
							{loading ? <HashLoader size={30} color="#FFFFFF" /> : "Login"}
						</button>
					</div>
					<p className="mt-5 text-textColor text-center">
						Don&apos;t have an account?{" "}
						<Link
							to="/register"
							className="text-primaryColor hover:text-irisBlueColor font-medium ml-1  hover:underline"
						>
							Register
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Login;
