import { doctors } from "../../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

const DoctorsList = () => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 lg:gap-[50px] mt-[30px] lg:mt-[55px]">
			{doctors.map((doctor) => (
				<DoctorCard key={doctor.id} doctor={doctor} />
			))}
		</div>
	);
};

export default DoctorsList;
