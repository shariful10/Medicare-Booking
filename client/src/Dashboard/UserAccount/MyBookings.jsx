import React from "react";
import useFetchData from "../../components/Hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import DoctorCard from "../../pages/HomePage/GreatDoctors/DoctorCard";

const MyBookings = () => {
	const {
		data: appoinments,
		loading,
		error,
	} = useFetchData(`${BASE_URL}/users/appoinments/my-appoinment`);

	return (
		<div>
			<div className="mt-10">{loading && !error && <Loading />}</div>
			{error && !loading && <Error errorMessage={error} />}
			{!loading && !error && (
				<div className="grid lg:grid-cols-2 gap-5">
					{appoinments.map((doctor) => (
						<DoctorCard key={doctor._id} doctor={doctor} />
					))}
				</div>
			)}
			<div className="mt-10">
				{!loading && !error && appoinments.length === 0 && (
					<h2 className="text-center leading-7 text-xl font-semibold text-primaryColor">
						You did not book any doctor yet! 😒
					</h2>
				)}
			</div>
		</div>
	);
};

export default MyBookings;
