import starIcon from "../../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
	const { name, specialization, avgRating, totalRating, photo, totalPatients, hospital } = doctor;

	return (
		<div>
			<div>
				<img className="w-full" src={photo} alt="" />
			</div>
			<h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingsColor font-bold mt-3 lg:mt-5">
				{name}
			</h2>
			<div className="mt-2 lg:mt-4 flex items-center justify-between">
				<span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
					{specialization}
				</span>
				<div className="flex items-centergap-[6px]">
					<span className="flex items-center gap-[6px] text-sm leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingsColor">
						<img src={starIcon} alt="" />
						{avgRating}
					</span>
					<span className="text-sm leading-6 lg:text-[16px] lg:leading-7 font-normal text-textColor">
						({totalRating})
					</span>
				</div>
			</div>
			<div className="mt-[18px] lg:mt-5 flex items-center justify-between">
				<div>
					<h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingsColor">
						+{totalPatients} Patients
					</h3>
					<p className="text-[14px] leading-6 font-normal text-textColor">
						At {hospital}
					</p>
				</div>
				<Link
					to="/doctors"
					className="w-[44px] h-[44px] rounded-full flex items-center justify-center group bg-primaryColor hover:bg-irisBlueColor hover:border-none"
				>
					<BsArrowUp className="text-white h-5 w-6 duration-300 group-hover:rotate-90" />
				</Link>
			</div>
		</div>
	);
};

export default DoctorCard;
