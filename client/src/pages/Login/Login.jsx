import { useState } from "react";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import { Link } from "react-router-dom";

const Login = () => {
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
				<form className="py-4 md:py-0">
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
						<BtnSubmit title={"Login"} />
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
