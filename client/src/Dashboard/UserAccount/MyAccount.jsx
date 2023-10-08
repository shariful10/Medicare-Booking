import React from "react";
import userImg from "../../assets/images/doctor-img03.png";
import useAuth from "./../../components/Hooks/useAuth";

const MyAccount = () => {
	const { dispatch } = useAuth();

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="max-w-[1170px] px-5 mx-auto">
			<div className="grid md:grid-cols-3 gap-10">
				<div className="pb-[50px] px-[30px] rounded-md">
					<div className="flex items-center justify-center">
						{/* <====<<==== Image ====>>====> */}
						<figure className="w-[100px] h-[100px] rounded-full border-2 border-primaryColor">
							<img
								src={userImg}
								alt="Profile Picture"
								className="w-full h-full rounded-full"
							/>
						</figure>
					</div>
					<div className="text-center mt-4">
						<h3 className="text-[18px] leading-[30px] text-headingsColor font-bold">
							Md. Shariful Islam
						</h3>
						<p className="text-textColor text-[15px] leading-6 font-medium">
							example@gmail.com
						</p>
						<p className="text-textColor text-[15px] leading-6 font-medium">
							Blood Type:{" "}
							<span className="ml-2 text-headingsColor text-[22px] leading-8">
								o+
							</span>
						</p>
					</div>
					<div className="mt-[50px] md:mt-[100px]">
						<button
							onClick={handleLogout}
							className="btn__profile primary__btn bg-primaryColor"
						>
							Logout
						</button>
						<button className="btn__profile delete__btn">
							Delete Account
						</button>
					</div>
				</div>
				<div className="md:col-span-2 md:px-[30px]">
					<div>
						<button className="profile__btn">My Bookings</button>
						<button className="profile__btn">
							Profile Settings
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccount;
