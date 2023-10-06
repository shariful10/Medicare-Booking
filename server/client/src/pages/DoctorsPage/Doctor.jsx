import { doctors } from "../../assets/data/doctors";
import BtnSearch from "../../components/BtnSearch/BtnSearch";
import Testimonials from "../HomePage/Testimonials/Testimonials";
import DoctorCard from "./../HomePage/GreatDoctors/DoctorCard";

const Doctor = () => {
	return (
		<>
			{/* <======<<======= Title & Search Field  =======>>======> */}
			<section className="bg-[#FFF9EA]">
				<div className="container text-center">
					<h2 className="heading">Find a Doctor</h2>
					<div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066FF2C] rounded-md flex items-center justify-between">
						<input
							type="search"
							className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
							placeholder="Search a Doctor"
						/>
						<BtnSearch title="Search" />
					</div>
				</div>
			</section>
			{/* <======<<======= Title & Searchbar =======>>======> */}
			<section>
				<div className="container">
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10">
						{doctors.map((doctor) => (
							<DoctorCard key={doctor.id} doctor={doctor} />
						))}
					</div>
				</div>
			</section>
			<Testimonials />
		</>
	);
};

export default Doctor;
