import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import { Link, useNavigate } from "react-router-dom";
import useAuth from './../../components/Hooks/useAuth';

const Login = () => {
	const navigate = useNavigate();
	const { dispatch } = useAuth();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await fetch(`${BASE_URL}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const result = await res.json();

			if (!res.ok) {
				throw new Error(result.message);
			}

			dispatch({
				type: "LOGIN_SUCCESS",
				payload: {
					user: result.data,
					token: result.token,
					role: result.role,
				},
			});

			console.log(result, "login data");

			setLoading(false);
			toast.success(result.message);
			navigate("/");
		} catch (err) {
			toast.error(err.message);
			setLoading(false);
		}
	};

	return (
		<section className="px-5 lg:px-0">
			<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 container">
				<h3 className="text-primaryColor text-[22px] leading-9 font-bold mb-10 text-center">
					Hello! <span className="text-irisBlueColor">Welcome</span> Back 👋
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
							className="btn__submit primary__btn"
						>
							{loading ? <HashLoader size={24} color="#FFFFFF" /> : "Login"}
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
