import { useState } from "react";
import userImg from "../../assets/images/doctor-img03.png";
import useAuth from "./../../components/Hooks/useAuth";
import MyBookings from "./MyBookings";
import ProfileSettings from "./profileSettings";
import useGetProfile from "../../components/Hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
	const { dispatch } = useAuth();
	const [tab, setTab] = useState("bookings");

	const {
		data: userData,
		loading,
		error,
	} = useGetProfile(`${BASE_URL}/users/profile/me`);

	console.log(userData, "User Data");

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<section>
			<div className="max-w-[1170px] px-5 mx-auto">
				{loading && !error && <Loading />}
				{error && !loading && <Error errorMessage={error} />}
				{!loading && !error && (
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
								<button className="btn__profile delete__btn mt-5">
									Delete Account
								</button>
							</div>
						</div>
						<div className="md:col-span-2 md:px-[30px]">
							<div>
								<button
									onClick={() => setTab("bookings")}
									className={`${
										tab === "bookings" &&
										"bg-primaryColor text-white font-normal border-transparent"
									} profile__btn`}
								>
									My Bookings
								</button>
								<button
									onClick={() => setTab("settings")}
									className={`${
										tab === "settings" &&
										"bg-primaryColor text-white font-normal border-transparent"
									} profile__btn`}
								>
									Profile Settings
								</button>
							</div>
							{tab === "bookings" && <MyBookings />}
							{tab === "settings" && <ProfileSettings />}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default MyAccount;
